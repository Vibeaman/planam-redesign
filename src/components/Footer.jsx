import React from 'react'
import { ArrowRight, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16" style={{background:'#050509'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">P</span>
              </div>
              <span className="text-white font-black text-xl">PlanAm</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">Your event life, simplified. Discover epic events, host sell-outs, sell tickets & merch. Fresh events, always.</p>
            <div className="flex gap-3">
              {[Twitter,Instagram,Facebook,Linkedin].map((Icon,i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 hover:bg-purple-600/30 border border-white/10 rounded-full flex items-center justify-center transition-colors">
                  <Icon size={14} className="text-white/70"/>
                </a>
              ))}
            </div>
          </div>
          {[
            {title:'Discover',links:['Browse Events','Trending Now','Near Me','Online Events','Free Events']},
            {title:'Host',links:['Create Event','Sell Tickets','Manage Events','Analytics','Pricing']},
            {title:'Company',links:['About PlanAm','Careers','Press','Blog','Contact Us']},
          ].map(({title,links}) => (
            <div key={title}>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(l => <li key={l}><a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-[#10101e] border border-white/5 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-black text-lg uppercase">Never Miss an Event</h4>
            <p className="text-white/50 text-sm mt-1">Get weekly event picks delivered to your inbox.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input type="email" placeholder="Enter your email..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm flex-1 md:w-64 outline-none"/>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap">Subscribe <ArrowRight size={13}/></button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm">© 2026 PlanAm. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(i => <a key={i} href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">{i}</a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
