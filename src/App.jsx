import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingEvents from './components/TrendingEvents'
import Categories from './components/Categories'
import HostBanner from './components/HostBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#08080f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TrendingEvents />
      <Categories />
      <HostBanner />
      <Footer />
    </div>
  )
}
