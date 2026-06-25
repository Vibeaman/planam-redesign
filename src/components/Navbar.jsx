import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{ background: 'rgba(124,58,237,0.95)', backdropFilter: 'blur(20px)' }} className="fixed top-0 left-0 right-0 z-50 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span style={{ color: '#7c3aed' }} className="font-black text-sm">P</span>
          </div>
          <span className="text-white font-black text-xl tracking-tight">PlanAm</span>
        </div>
        <div className="hidden md:flex items-center gap-7">
          {['Discover','Categories','Host Event','Pricing','Community'].map(item => (
            <a key={item} href="#" className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-1">
              {item} {(item==='Discover'||item==='Categories') && <ChevronDown size={13}/>}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white text-sm font-medium">Log In</button>
          <button className="text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Sign Up</button>
          <button className="bg-[#0d0d1a] text-white text-sm font-bold px-5 py-2 rounded-full flex items-center gap-2">
            GET STARTED <span className="bg-orange-500 rounded-full p-1"><ArrowRight size={11}/></span>
          </button>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-3 pb-4 border-t border-white/20 pt-4 flex flex-col gap-3">
          {['Discover','Categories','Host Event','Pricing','Community'].map(item => (
            <a key={item} href="#" className="text-white font-medium px-2">{item}</a>
          ))}
          <button className="mx-2 bg-[#0d0d1a] text-white text-sm font-bold px-4 py-3 rounded-full flex items-center gap-2 justify-center mt-2">
            GET STARTED <ArrowRight size={13}/>
          </button>
        </div>
      )}
    </nav>
  )
}
