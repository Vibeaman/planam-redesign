import React from 'react'
import { MapPin, TrendingUp, Ticket, ArrowRight, Eye } from 'lucide-react'

export default function EventCard({ event }) {
  return (
    <div
      className="card-hover cursor-pointer overflow-hidden"
      style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="event-image-overlay absolute inset-0" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className="badge text-white/90 text-xs px-2.5 py-1 flex items-center gap-1.5">
            <Eye size={10} />
            {event.viewerCount} viewing
          </span>
          {event.hotTrend && (
            <span className="trending-badge text-white text-xs font-black px-2.5 py-1 flex items-center gap-1">
              <TrendingUp size={10} /> HOT
            </span>
          )}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white/70 text-xs">
          <span className="flex items-center gap-1">
            <MapPin size={10} />
            {event.venue}
          </span>
          <span
            className="font-black text-sm"
            style={{ color: event.price === 'FREE' ? '#4ade80' : '#f97316' }}
          >
            {event.price}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#a78bfa' }}>
          {event.date}
        </div>
        <h3 className="text-white font-black text-xl uppercase leading-tight tracking-tight mb-3" style={{ letterSpacing: '-0.01em' }}>
          {event.title}
        </h3>

        {/* Avatars + going */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex -space-x-1.5">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2"
                style={{ background: `hsl(${260 + i * 25},65%,60%)`, borderColor: '#0f0f1a' }}
              />
            ))}
          </div>
          <span className="text-white/50 text-xs">
            <span className="text-white font-bold">{event.going}</span> going
          </span>
          <span className="ml-auto text-xs font-bold text-white/40 uppercase">{event.category}</span>
        </div>

        {/* Demand bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-white/40 mb-1.5">
            <span className="flex items-center gap-1"><Ticket size={9} /> Ticket demand</span>
            <span className="font-bold text-white/60">{event.sold}% sold</span>
          </div>
          <div className="h-1 bg-white/10 overflow-hidden">
            <div className="progress-bar h-full" style={{ width: `${event.sold}%` }} />
          </div>
        </div>

        {/* CTA */}
        <button
          className="w-full flex items-center justify-between text-xs font-black uppercase tracking-widest py-3 px-4 transition-colors group"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' }}
        >
          GET TICKETS
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
