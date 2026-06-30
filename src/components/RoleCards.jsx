import React from 'react'
import { ArrowRight, Ticket, Mic2, Users, Star } from 'lucide-react'

const roles = [
  {
    icon: Ticket,
    tag: 'For Attendees',
    title: 'Discover & experience amazing events',
    desc: 'Find parties, concerts, tech summits, sports events and everything in between. Book tickets in seconds, collect rewards, and build your event life.',
    cta: 'FIND EVENTS',
    color: '#7c3aed',
    bg: '#f0ecff',
    textDark: true,
  },
  {
    icon: Mic2,
    tag: 'For Organizers',
    title: 'Host sell-out events with ease',
    desc: 'Create events, sell tickets & merch, manage check-ins, and access real-time analytics. Everything you need to run world-class events.',
    cta: 'START HOSTING',
    color: '#7c3aed',
    bg: '#08080f',
    textDark: false,
    featured: true,
  },
  {
    icon: Users,
    tag: 'For Communities',
    title: 'Build your Tribe, grow together',
    desc: 'Launch membership clubs, reward loyal fans, manage communities, and keep your people engaged 365 days a year — not just event days.',
    cta: 'BUILD A TRIBE',
    color: '#f97316',
    bg: '#f0ecff',
    textDark: true,
  },
  {
    icon: Star,
    tag: 'For Vendors',
    title: 'Sell merch & services at events',
    desc: 'Set up your vendor profile, get discovered by event organizers, and sell your products or services at premium events across Nigeria.',
    cta: 'JOIN AS VENDOR',
    color: '#f97316',
    bg: '#08080f',
    textDark: false,
  },
]

export default function RoleCards() {
  return (
    <section className="px-6 py-24" style={{ background: 'var(--lavender)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 mb-4"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed' }}
          >
            Built For Everyone
          </div>
          <h2
            className="font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.03em', color: '#08080f' }}
          >
            One platform,{' '}
            <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>every role.</span>
          </h2>
          <p className="text-black/50 text-lg mt-4 max-w-xl mx-auto font-medium">
            Whether you're attending, hosting, building a community, or selling — PlanAm has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map(({ icon: Icon, tag, title, desc, cta, color, bg, textDark, featured }) => (
            <div
              key={tag}
              className="card-hover p-8 md:p-10 flex flex-col gap-6"
              style={{
                background: bg,
                border: featured ? `2px solid ${color}` : '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                style={{ background: textDark ? `${color}15` : 'rgba(255,255,255,0.08)', border: `1px solid ${color}30` }}
              >
                <Icon size={24} style={{ color }} />
              </div>

              <div>
                <div
                  className="text-xs font-black uppercase tracking-widest mb-3"
                  style={{ color }}
                >
                  {tag}
                </div>
                <h3
                  className="font-black text-2xl uppercase leading-tight mb-3"
                  style={{ color: textDark ? '#08080f' : 'white', letterSpacing: '-0.02em' }}
                >
                  {title}
                </h3>
                <p style={{ color: textDark ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {desc}
                </p>
              </div>

              <button
                className="self-start btn-primary"
                style={{ background: color }}
              >
                <span className="btn-label">{cta}</span>
                <span className="btn-arrow"><ArrowRight size={13} /></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
