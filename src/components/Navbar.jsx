import React, { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 cursor-pointer">
        <div style={{ width: 32, height: 32, background: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontWeight: 900, fontSize: 14, fontFamily: 'Inter, sans-serif' }}>P</span>
        </div>
        <span style={{ color: 'white', fontWeight: 900, fontSize: 18, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>PlanAm</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {[['Discover', true], ['Host Event', false], ['Pricing', false], ['About', false]].map(([label, hasDropdown]) => (
          <button
            key={label}
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm font-semibold"
          >
            {label}
            {hasDropdown && <ChevronDown size={13} className="opacity-60" />}
          </button>
        ))}
      </div>

      {/* Desktop actions */}
      <div className="hidden md:flex items-center gap-3">
        <button className="text-white/60 hover:text-white transition-colors p-2">
          <Search size={17} />
        </button>
        <button className="text-white/70 hover:text-white text-sm font-bold px-4 py-2 transition-colors">
          Log in
        </button>
        <button className="btn-primary">
          <span className="btn-label">GET STARTED</span>
        </button>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 px-6 py-6 flex flex-col gap-4"
          style={{ background: 'rgba(8,8,15,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {['Discover', 'Host Event', 'Pricing', 'About'].map(l => (
            <button key={l} className="text-white/80 hover:text-white font-semibold text-left text-sm py-1">{l}</button>
          ))}
          <div className="flex gap-3 pt-2 border-t border-white/10">
            <button className="text-white/70 text-sm font-bold flex-1 py-2">Log in</button>
            <button className="btn-primary flex-1 justify-center"><span className="btn-label">GET STARTED</span></button>
          </div>
        </div>
      )}
    </nav>
  )
}
