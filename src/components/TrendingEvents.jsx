import React from 'react'
import EventCard from './EventCard'
import { ArrowRight } from 'lucide-react'

const events = [
  { id: 1, title: 'Lagos Art Walk', category: 'Art & Culture', date: 'JUL 05 · 3:00 PM', venue: 'Victoria Island', price: 'FREE', going: '1,200', sold: 63, hotTrend: true, viewerCount: 18, image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&q=80' },
  { id: 2, title: 'Africa Tech Summit 2026', category: 'Tech', date: 'JUL 25 · 9:00 AM', venue: 'Eko Convention Centre', price: '₦15,000', going: '842', sold: 74, hotTrend: true, viewerCount: 34, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
  { id: 3, title: 'Street Food Festival', category: 'Food & Drink', date: 'JUL 12 · 12:00 PM', venue: 'Lekki Phase 1', price: '₦2,000', going: '560', sold: 81, hotTrend: true, viewerCount: 22, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80' },
  { id: 4, title: 'Afrobeats Night Live', category: 'Music', date: 'JUN 28 · 8:00 PM', venue: 'Balmoral Events Centre', price: '₦5,000', going: '2,100', sold: 92, hotTrend: true, viewerCount: 103, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80' },
  { id: 5, title: 'Lagos Comedy Fiesta', category: 'Comedy', date: 'JUL 19 · 6:00 PM', venue: 'Terra Kulture, Lagos', price: '₦3,500', going: '480', sold: 57, hotTrend: false, viewerCount: 11, image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&q=80' },
  { id: 6, title: 'Web3 & DeFi Conference', category: 'Tech', date: 'AUG 02 · 10:00 AM', venue: 'Landmark Events, VI', price: '₦10,000', going: '320', sold: 44, hotTrend: false, viewerCount: 28, image: 'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=600&q=80' },
]

export default function TrendingEvents() {
  return (
    <section className="px-6 py-24" style={{ background: '#08080f' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-tag">🔥 What's Hot</div>
            <h2
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
            >
              Trending <span style={{ color: '#c4b5fd', fontStyle: 'italic' }}>Events.</span>
            </h2>
            <p className="text-white/40 text-base mt-3 font-medium max-w-lg">
              Parties, tech summits, sports, weddings, festivals and more. Fresh events always.
            </p>
          </div>
          <button className="btn-outline self-start md:self-auto flex-shrink-0">
            <span className="btn-label">SEE ALL EVENTS</span>
            <span className="btn-arrow"><ArrowRight size={14} /></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </div>
    </section>
  )
}
