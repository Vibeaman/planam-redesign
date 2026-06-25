import React from 'react'
import { Music, Cpu, Palette, UtensilsCrossed, Trophy, Briefcase, Users, PartyPopper, Laugh, Tent } from 'lucide-react'

const cats = [
  {name:'Music',icon:Music,count:'240+',color:'#7c3aed'},
  {name:'Tech',icon:Cpu,count:'180+',color:'#6366f1'},
  {name:'Art',icon:Palette,count:'120+',color:'#8b5cf6'},
  {name:'Food',icon:UtensilsCrossed,count:'95+',color:'#a78bfa'},
  {name:'Sports',icon:Trophy,count:'160+',color:'#7c3aed'},
  {name:'Business',icon:Briefcase,count:'88+',color:'#6366f1'},
  {name:'Community',icon:Users,count:'210+',color:'#8b5cf6'},
  {name:'Party',icon:PartyPopper,count:'300+',color:'#a78bfa'},
  {name:'Comedy',icon:Laugh,count:'75+',color:'#7c3aed'},
  {name:'Festivals',icon:Tent,count:'45+',color:'#6366f1'},
]

const gradText = { background:'linear-gradient(135deg,#a78bfa,#818cf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }

export default function Categories() {
  return (
    <section className="px-6 py-20" style={{background:'linear-gradient(180deg,#08080f 0%,#0d0d1f 100%)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            Browse by <span className="italic" style={gradText}>Category.</span>
          </h2>
          <p className="text-white/50 mt-3 text-lg">Find exactly what moves you</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {cats.map(({name,icon:Icon,count,color}) => (
            <div key={name} className="bg-[#10101e] hover:bg-[#16162a] border border-white/5 hover:border-purple-500/30 rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer card-hover transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{background:`${color}25`,border:`1px solid ${color}40`}}>
                <Icon size={24} style={{color}}/>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-sm">{name}</div>
                <div className="text-white/40 text-xs mt-0.5">{count} events</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
