import React from 'react'
import { Music, Cpu, Palette, UtensilsCrossed, Trophy, Briefcase, Users, PartyPopper, Laugh, Tent } from 'lucide-react'

const cats = [
  { name: 'Music', icon: Music, count: '240+', color: '#7c3aed' },
  { name: 'Tech', icon: Cpu, count: '180+', color: '#6366f1' },
  { name: 'Art', icon: Palette, count: '120+', color: '#8b5cf6' },
  { name: 'Food', icon: UtensilsCrossed, count: '95+', color: '#f97316' },
  { name: 'Sports', icon: Trophy, count: '160+', color: '#7c3aed' },
  { name: 'Business', icon: Briefcase, count: '88+', color: '#6366f1' },
  { name: 'Community', icon: Users, count: '210+', color: '#f97316' },
  { name: 'Party', icon: PartyPopper, count: '300+', color: '#8b5cf6' },
  { name: 'Comedy', icon: Laugh, count: '75+', color: '#7c3aed' },
  { name: 'Festivals', icon: Tent, count: '45+', color: '#f97316' },
]

export default function Categories() {
  return (
    <section className="px-6 py-24" style={{ background: 'var(--lavender2)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 mb-4"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed' }}
            >
              Browse
            </div>
            <h2
              className="font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.03em', color: '#08080f' }}
            >
              Find your <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>vibe.</span>
            </h2>
          </div>
          <p className="text-black/50 text-base max-w-sm font-medium md:text-right">
            From afrobeats to algorithms — explore every type of event.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {cats.map(({ name, icon: Icon, count, color }) => (
            <div
              key={name}
              className="card-hover flex flex-col items-center gap-3 p-6 cursor-pointer transition-all duration-300 group"
              style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div className="text-center">
                <div className="font-black text-sm uppercase tracking-tight" style={{ color: '#08080f' }}>{name}</div>
                <div className="text-xs font-semibold mt-0.5" style={{ color: 'rgba(0,0,0,0.35)' }}>{count} events</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
