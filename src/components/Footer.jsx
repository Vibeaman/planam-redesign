import React from 'react'
import { ArrowRight, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#050509', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Newsletter CTA */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 mb-16"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
        >
          <div>
            <h4 className="text-white font-black text-2xl uppercase" style={{ letterSpacing: '-0.02em' }}>
              Never miss an event.
            </h4>
            <p className="text-white/45 text-sm mt-1">Get the best events in your city, every week.</p>
          </div>
          <div className="flex gap-0 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address…"
              className="flex-1 md:w-72 text-sm outline-none text-white placeholder:text-white/30"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRight: 'none', padding: '14px 18px', fontFamily: 'Inter, sans-serif' }}
            />
            <button className="btn-orange flex-shrink-0">
              <span className="btn-label">SUBSCRIBE</span>
              <span className="btn-arrow"><ArrowRight size={13} /></span>
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div style={{ width: 32, height: 32, background: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontWeight: 900, fontSize: 14, fontFamily: 'Inter, sans-serif' }}>P</span>
              </div>
              <span style={{ color: 'white', fontWeight: 900, fontSize: 18, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>PlanAm</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Your event life, simplified. Discover, host, and experience the best events Nigeria has to offer.
            </p>
            <div className="flex gap-2">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                >
                  <Icon size={13} style={{ color: 'rgba(255,255,255,0.6)' }} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Discover', links: ['Browse Events', 'Trending Now', 'Near Me', 'Online Events', 'Free Events'] },
            { title: 'Host', links: ['Create Event', 'Sell Tickets', 'Manage Events', 'Analytics', 'Pricing'] },
            { title: 'Company', links: ['About PlanAm', 'Careers', 'Press', 'Blog', 'Contact Us'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-sm transition-colors font-medium"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-white/25 text-xs">© 2026 PlanAm Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-white/25 hover:text-white/55 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
