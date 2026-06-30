import React from 'react'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Create your account',
    desc: 'Sign up in 30 seconds. No credit card required. Choose your role — attendee, organizer, or both.',
    color: '#7c3aed',
  },
  {
    num: '02',
    title: 'Discover or create events',
    desc: 'Browse thousands of events near you, or set up your own in minutes with our powerful event builder.',
    color: '#f97316',
  },
  {
    num: '03',
    title: 'Sell tickets & merch',
    desc: 'Go live instantly. Accept payments, manage capacity, and sell branded merch — all from one dashboard.',
    color: '#7c3aed',
  },
  {
    num: '04',
    title: 'Grow your audience',
    desc: 'Use built-in analytics, loyalty rewards, and community tools to turn one-time attendees into lifelong fans.',
    color: '#f97316',
  },
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-24" style={{ background: '#0a0a14' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-tag">Simple Process</div>
            <h2
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
            >
              How it <span style={{ color: '#f97316', fontStyle: 'italic' }}>works.</span>
            </h2>
          </div>
          <button className="btn-orange self-start md:self-auto">
            <span className="btn-label">GET STARTED FREE</span>
            <span className="btn-arrow"><ArrowRight size={14} /></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map(({ num, title, desc, color }, i) => (
            <div
              key={num}
              className="p-8 flex flex-col gap-5 relative"
              style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Number */}
              <div
                className="font-black"
                style={{
                  fontSize: '4.5rem',
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: `2px ${color}`,
                  opacity: 0.6,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.04em',
                }}
              >
                {num}
              </div>

              <div>
                <h3
                  className="text-white font-black text-xl uppercase leading-tight mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Connector arrow */}
              {i < 3 && (
                <div
                  className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center z-10"
                  style={{ background: '#0a0a14' }}
                >
                  <ArrowRight size={14} style={{ color: 'rgba(255,255,255,0.2)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
