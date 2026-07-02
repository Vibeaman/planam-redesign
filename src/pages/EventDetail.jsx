import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { MapPin, Calendar, Clock, Users, Ticket, Share2, Heart, ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import EventService from '../services/EventService'
import TicketService from '../services/TicketService'
import { useAuth } from '../context/AuthContext'

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedTier, setSelectedTier] = useState(null)
  const [qty, setQty] = useState(1)
  const [buying, setBuying] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const data = await EventService.getById(id)
        setEvent(data)
        if (data?.ticket_tiers?.length) setSelectedTier(data.ticket_tiers[0])
      } catch (e) {
        toast.error('Event not found')
        navigate('/events')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  async function handleBuy() {
    if (!user) { toast.error('Please log in to buy tickets'); navigate('/login'); return }
    if (!selectedTier) return
    setBuying(true)
    try {
      await TicketService.purchase({
        eventId: event.id,
        eventTitle: event.title,
        tierName: selectedTier.name,
        quantity: qty,
        totalPrice: selectedTier.price * qty,
        userId: user.id
      })
      toast.success(`🎉 ${qty}x ${selectedTier.name} ticket${qty > 1 ? 's' : ''} purchased!`)
      navigate('/dashboard')
    } catch (e) {
      toast.error(e.message || 'Purchase failed')
    } finally {
      setBuying(false)
    }
  }

  if (loading) return <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
  if (!event) return null

  const tiers = event.ticket_tiers || []

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-20 pb-16">
      {/* Hero image */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <button onClick={() => navigate(-1)} className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute top-6 right-6 flex gap-2">
          <button onClick={() => setLiked(!liked)} className={`p-2 rounded-full backdrop-blur-sm transition ${liked ? 'bg-pink-500/80 text-white' : 'bg-black/50 text-white hover:bg-black/70'}`}>
            <Heart className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success('Link copied!') }} className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="bg-purple-600/20 text-purple-400 text-sm font-bold px-4 py-1.5 rounded-full">{event.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">{event.title}</h1>
              <p className="text-gray-400 text-sm">by {event.organizer_name || 'Unknown Organizer'}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div><p className="text-xs text-gray-500">Date</p><p className="text-white font-medium">{event.date}</p></div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <div><p className="text-xs text-gray-500">Time</p><p className="text-white font-medium">{event.time || 'TBA'}</p></div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 sm:col-span-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <div><p className="text-xs text-gray-500">Location</p><p className="text-white font-medium">{event.location}</p></div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">About This Event</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.description}</p>
            </div>
            {event.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {event.tags.map(t => <span key={t} className="bg-white/5 text-gray-400 text-sm px-3 py-1 rounded-full">#{t}</span>)}
              </div>
            )}
          </div>

          {/* Right sidebar — tickets */}
          <div className="space-y-6" id="tickets">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Ticket className="w-5 h-5 text-purple-400" /> Select Tickets</h2>
              <div className="space-y-3 mb-6">
                {tiers.map(tier => (
                  <button key={tier.name} onClick={() => { setSelectedTier(tier); setQty(1) }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${selectedTier?.name === tier.name ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">{tier.name}</p>
                        <p className="text-xs text-gray-500">{tier.available} remaining</p>
                      </div>
                      <p className="text-purple-400 font-bold">₦{tier.price.toLocaleString()}</p>
                    </div>
                  </button>
                ))}
              </div>
              {selectedTier && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400">Quantity</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20"><Minus className="w-4 h-4" /></button>
                      <span className="text-white font-bold w-6 text-center">{qty}</span>
                      <button onClick={() => setQty(Math.min(10, qty + 1))} className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20"><Plus className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4 mb-4">
                    <div className="flex justify-between text-gray-400 text-sm mb-1"><span>{selectedTier.name} x{qty}</span><span>₦{(selectedTier.price * qty).toLocaleString()}</span></div>
                    <div className="flex justify-between text-white font-bold text-lg mt-2"><span>Total</span><span>₦{(selectedTier.price * qty).toLocaleString()}</span></div>
                  </div>
                  <button onClick={handleBuy} disabled={buying}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    {buying ? 'Processing...' : `Buy Ticket${qty > 1 ? 's' : ''}`}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
