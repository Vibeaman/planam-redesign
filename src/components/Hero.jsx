import React from 'react'
import { ArrowRight, Flame, Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-20 relative">
      <div className="hero-grid" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">

        {/* Section tag */}
        <div className="section-tag mx-auto mb-8" style={{ display: 'inline-flex' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
          2,400+ events happening this week across Nigeria
        </div>

        {/* Main headline */}
        <h1
          className="text-white uppercase font-black leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 11vw, 9rem)', letterSpacing: '-0.03em' }}
        >
          Your event life,{' '}
          <span style={{ color: '#c4b5fd', fontStyle: 'italic' }}>
            simplified.
          </span>
        </h1>

        {/* Sub headline */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Discover epic events. Host sell-outs. Sell tickets &amp; merch.
          Reward your people. Build Tribes. <span style={{ color: '#f97316' }}>All in one place.</span>
        </p>

        {/* Search bar */}
        <div
          className="flex items-center gap-3 mb-10 mx-auto max-w-xl"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '6px 6px 6px 20px' }}
        >
          <Search size={16} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search events, artists, venues…"
            style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '0.875rem', flex: 1, fontFamily: 'Inter, sans-serif' }}
          />
          <button className="btn-orange">
            <span className="btn-label">SEARCH</span>
          </button>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <button className="btn-primary">
            <span className="btn-label">PLAN AN EVENT</span>
            <span className="btn-arrow"><ArrowRight size={14} /></span>
          </button>
          <button className="btn-outline">
            <span className="btn-label">EXPLORE EVENTS</span>
            <span className="btn-arrow"><ArrowRight size={14} /></span>
          </button>
        </div>

        {/* Trending tags */}
        <div className="flex flex-wrap gap-2 justify-center items-center mb-16">
          <span className="text-white/40 text-xs font-semibold flex items-center gap-1 uppercase tracking-widest mr-2">
            <Flame size={12} style={{ color: '#f97316' }} /> Trending
          </span>
          {['Afrobeats', 'Tech Summit', 'Art Festival', 'Street Food', 'Comedy Night', 'Web3'].map(tag => (
            <button
              key={tag}
              className="text-white/60 text-xs font-semibold uppercase tracking-wide hover:text-white transition-colors px-3 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-0 max-w-xl mx-auto">
          {[['50K+', 'Attendees'], ['1K+', 'Events Listed'], ['50+', 'Cities']].map(([v, l], i) => (
            <div
              key={l}
              className="text-center px-6"
              style={i < 2 ? { borderRight: '1px solid rgba(255,255,255,0.08)' } : {}}
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-1">{v}</div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
