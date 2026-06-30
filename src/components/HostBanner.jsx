import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const features = [
  'Create events in under 5 minutes',
  'Accept payments via card, bank transfer & USSD',
  'Sell tickets, merch & VIP upgrades',
  'Real-time check-in & analytics dashboard',
  'Automated attendee communication',
  'Custom branded event pages',
]

export default function HostBanner() {
  return (
    <section
      className="px-6 py-24 relative overflow-hidden"
      style={{ background: '#08080f' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(124,58,237,0.04)' }}
        >
          {/* Left */}
          <div>
            <div className="section-tag">For Organizers</div>
            <h2
              className="text-white font-black uppercase leading-none mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              Host your next{' '}
              <span style={{ color: '#f97316', fontStyle: 'italic' }}>sell-out</span>{' '}
              event.
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Powerful, intuitive tools for Nigerian event organizers. From your first event to your 500th — PlanAm grows with you.
            </p>

            <ul className="grid grid-cols-1 gap-3 mb-10">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={15} style={{ color: '#7c3aed', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">
                <span className="btn-label">START HOSTING</span>
                <span className="btn-arrow"><ArrowRight size={14} /></span>
              </button>
              <button className="btn-outline">
                <span className="btn-label">SEE PRICING</span>
                <span className="btn-arrow"><ArrowRight size={14} /></span>
              </button>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              ['10K+', 'Events Hosted', '+23% this month', '#7c3aed'],
              ['₦2.4B+', 'Tickets Sold', '+41% this month', '#f97316'],
              ['98%', 'Host Satisfaction', 'Consistently high', '#7c3aed'],
              ['50+', 'Cities Covered', 'And growing fast', '#f97316'],
            ].map(([v, l, c, col]) => (
              <div
                key={l}
                className="p-6 flex flex-col gap-2"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="text-4xl font-black"
                  style={{ color: col, letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}
                >
                  {v}
                </div>
                <div className="text-white font-bold text-sm">{l}</div>
                <div className="text-xs font-semibold" style={{ color: '#4ade80' }}>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
