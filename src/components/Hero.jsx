import React from 'react'
import { Search, MapPin, ArrowRight, Flame } from 'lucide-react'

const gradText = { background: 'linear-gradient(135deg,#a78bfa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center pt-24 px-6 pb-16">
      <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 bg-green-400 rounded-full" style={{animation:'pulse 2s infinite'}}/>
        <span className="text-white/80 text-sm font-medium">2,400+ events happening this week</span>
      </div>

      <h1 className="text-center max-w-5xl mb-6">
        <span className="block text-6xl md:text-8xl font-black uppercase text-white tracking-tight leading-none">Find Your Next</span>
        <span className="block text-6xl md:text-8xl font-black italic" style={gradText}>Unforgettable</span>
        <span className="block text-6xl md:text-8xl font-black uppercase text-white tracking-tight leading-none">Experience.</span>
      </h1>

      <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed">
        Music, tech, arts, food, sports & more. Discover epic events near you — from local hidden gems to massive festivals. Fresh events, always.
      </p>

      <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row gap-2 mb-6">
        <div className="flex items-center gap-3 flex-1 bg-white/5 rounded-xl px-4 py-3">
          <Search size={17} style={{color:'#a78bfa'}}/>
          <input type="text" placeholder="Search events, artists, venues..." className="bg-transparent text-white placeholder:text-white/30 text-sm flex-1 outline-none"/>
        </div>
        <div className="flex items-center gap-3 flex-1 bg-white/5 rounded-xl px-4 py-3">
          <MapPin size={17} style={{color:'#a78bfa'}}/>
          <input type="text" placeholder="City or location" className="bg-transparent text-white placeholder:text-white/30 text-sm flex-1 outline-none"/>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-xl transition-colors flex items-center gap-2 justify-center">
          Search <ArrowRight size={15}/>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-16">
        <span className="text-white/50 text-sm mr-1 flex items-center gap-1"><Flame size={13} style={{color:'#f97316'}}/> Trending:</span>
        {['Afrobeats','Tech Summit','Art Festival','Street Food','Comedy Night','Web3'].map(tag => (
          <button key={tag} className="text-white/70 text-sm border border-white/20 rounded-full px-3 py-1 hover:border-purple-500 hover:text-white transition-colors">{tag}</button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 md:gap-24">
        {[['50K+','Attendees'],['1K+','Events'],['50+','Cities']].map(([v,l]) => (
          <div key={l} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-1">{v}</div>
            <div className="text-white/50 text-xs font-medium uppercase tracking-widest">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
