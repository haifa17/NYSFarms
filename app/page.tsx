'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Check, Award, Leaf, Target } from 'lucide-react'
import Link from 'next/link'
import Hero from '@/components/hero'
import ProductShowcase from '@/components/product-showcase'
import TrustSignals from '@/components/trust-signals'
import OurStory from '@/components/our-story'
import HowItWorks from '@/components/how-it-works'
import VideoTestimonials from '@/components/video-testimonials'
import ContactSection from '@/components/contact-section'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <TrustSignals />
      <OurStory />
      <HowItWorks />
      <VideoTestimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}
