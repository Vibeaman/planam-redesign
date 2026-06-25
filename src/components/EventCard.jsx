import React from 'react'
import { Calendar, MapPin, TrendingUp, Ticket, ArrowRight } from 'lucide-react'

export default function EventCard({ event }) {
  return (
    <div className="bg-[#10101e] rounded-2xl overflow-hidden card-hover cursor-pointer border border-white/5">
      <div className="relative h-52 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover"/>
        <div className="event-image-overlay absolute inset-0"/>
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className="badge text-white/90 text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"/>
            {event.viewerCount} viewing now
          </span>
          <span className="badge text-white/90 text-xs px-2 py-1 rounded-full uppercase font-semibold">{event.category}</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white/70 text-xs">
          <span className="flex items-center gap-1"><MapPin size={10}/>{event.venue}</span>
          <span>⏰ {event.time}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1"><Calendar size={11} style={{color:'#a78bfa'}}/><span className="text-xs font-semibold" style={{color:'#a78bfa'}}>{event.date}</span></div>
            <h3 className="text-white font-black text-lg uppercase tracking-tight leading-tight">{event.title}</h3>
          </div>
          <span className="text-white font-bold text-sm bg-purple-600/20 border border-purple-600/30 px-2 py-1 rounded-lg whitespace-nowrap">{event.price}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_,i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#10101e]" style={{background:`hsl(${260+i*30},70%,60%)`}}/>
            ))}
          </div>
          <span className="text-white/60 text-xs"><span className="text-white font-semibold">{event.going}</span> going</span>
          {event.hotTrend && (
            <span className="trending-badge text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ml-auto">
              <TrendingUp size={10}/> HOT
            </span>
          )}
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-xs text-white/50 mb-1">
            <span className="flex items-center gap-1"><Ticket size={10}/> Ticket demand</span>
            <span className="text-white/70 font-semibold">{event.sold}% sold</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="progress-bar h-full rounded-full" style={{width:`${event.sold}%`}}/>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs">Similar events: {event.similar}</span>
          <button className="text-xs font-semibold flex items-center gap-1 hover:text-purple-300 transition-colors" style={{color:'#a78bfa'}}>
            + GOING? <ArrowRight size={10}/>
          </button>
        </div>
      </div>
    </div>
  )
}
