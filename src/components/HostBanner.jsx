import React from 'react'
import { ArrowRight, Calendar, Ticket, TrendingUp } from 'lucide-react'

export default function HostBanner() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden" style={{background:'linear-gradient(135deg,#4c1d95 0%,#5b21b6 40%,#6d28d9 100%)'}}>
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10" style={{filter:'blur(80px)',background:'white',borderRadius:'50%'}}/>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-3">For Event Organizers</p>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-4">
                Host Your Next <span className="italic text-purple-200">Sell-Out</span> Event.
              </h2>
              <p className="text-white/70 text-lg mb-6">Powerful tools to plan, sell tickets, manage attendees, and grow your audience — all in one place.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[[Calendar,'Easy event setup'],[Ticket,'Sell tickets & merch'],[TrendingUp,'Real-time analytics']].map(([Icon,text]) => (
                  <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                    <Icon size={15} style={{color:'#c4b5fd'}}/>{text}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-white font-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-purple-50 transition-colors text-sm uppercase tracking-wide" style={{color:'#6d28d9'}}>
                  Start Hosting <span className="bg-orange-500 text-white rounded-full p-1"><ArrowRight size={11}/></span>
                </button>
                <button className="border border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wide">Learn More</button>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[200px]">
              {[['10K+','Events Hosted','+23% this month'],['₦2.4B+','Tickets Sold','+41% this month'],['98%','Host Satisfaction','Consistently high']].map(([v,l,c]) => (
                <div key={l} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4">
                  <div className="text-3xl font-black text-white">{v}</div>
                  <div className="text-white/70 text-sm">{l}</div>
                  <div className="text-green-300 text-xs mt-1 font-medium">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
