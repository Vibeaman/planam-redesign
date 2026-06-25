import React from 'react'
import EventCard from './EventCard'
import { ArrowRight } from 'lucide-react'

const events = [
  { id:1, title:'Lagos Art Walk', category:'Art & Culture', date:'JUL 05 · 3:00 PM', time:'3:00 PM', venue:'Victoria Island', price:'FREE', going:'1,200', sold:63, similar:'200-300', hotTrend:true, viewerCount:18, image:'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&q=80' },
  { id:2, title:'Africa Tech Summit 2026', category:'Tech', date:'JUL 25 · 9:00 AM', time:'9:00 AM', venue:'Eko Convention Centre', price:'₦15,000', going:'842', sold:74, similar:'100-150', hotTrend:true, viewerCount:34, image:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
  { id:3, title:'Street Food Festival Lagos', category:'Food & Drink', date:'JUL 12 · 12:00 PM', time:'12:00 PM', venue:'Lekki Phase 1', price:'₦2,000', going:'560', sold:81, similar:'50-80', hotTrend:true, viewerCount:22, image:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80' },
  { id:4, title:'Afrobeats Night Live', category:'Music', date:'JUN 28 · 8:00 PM', time:'8:00 PM', venue:'Balmoral Events Centre', price:'₦5,000', going:'2,100', sold:92, similar:'300-400', hotTrend:true, viewerCount:103, image:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80' },
  { id:5, title:'Lagos Comedy Fiesta', category:'Comedy', date:'JUL 19 · 6:00 PM', time:'6:00 PM', venue:'Terra Kulture, Lagos', price:'₦3,500', going:'480', sold:57, similar:'100-200', hotTrend:false, viewerCount:11, image:'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&q=80' },
  { id:6, title:'Web3 & DeFi Conference', category:'Tech', date:'AUG 02 · 10:00 AM', time:'10:00 AM', venue:'Landmark Events, VI', price:'₦10,000', going:'320', sold:44, similar:'50-100', hotTrend:false, viewerCount:28, image:'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=600&q=80' },
]

const gradText = { background:'linear-gradient(135deg,#a78bfa,#818cf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }

export default function TrendingEvents() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none">
            Trending <span className="italic" style={gradText}>Events.</span>
          </h2>
          <p className="text-white/50 mt-3 text-lg max-w-xl">What's happening in your city right now — parties, tech summits, sports, festivals and more.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#12121f] hover:bg-[#1a1a2e] border border-white/10 text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
          See More Events <span className="bg-orange-500 rounded-full p-1"><ArrowRight size={11}/></span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(e => <EventCard key={e.id} event={e}/>)}
      </div>
    </section>
  )
}
