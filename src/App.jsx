import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingEvents from './components/TrendingEvents'
import RoleCards from './components/RoleCards'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import HostBanner from './components/HostBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#08080f' }}>
      <Navbar />
      <Hero />
      <TrendingEvents />
      <RoleCards />
      <HowItWorks />
      <Categories />
      <HostBanner />
      <Footer />
    </div>
  )
}
