'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 sm:pt-24">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-video-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* LEFT */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-white text-center lg:text-left">
          
          <Badge className="bg-accent/30 text-white border-accent/50 border px-3 py-1 text-xs sm:text-sm backdrop-blur-sm w-fit mx-auto lg:mx-0">
            🌟 Premium Halal Certified
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Premium Halal Meat
            <span className="block text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text mt-2 sm:mt-3">
              Delivered Fresh
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
            Experience the finest halal-certified meats sourced responsibly and delivered straight to your door.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-6 sm:px-8">
              Shop Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-white bg-white/10 border-white/50 px-6 sm:px-8">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
            {[
              { value: '2,500+', label: 'Happy Customers' },
              { value: '99.8%', label: 'Satisfaction Rate' },
              { value: '48hrs', label: 'Fresh Delivery' }
            ].map((stat, i) => (
              <div key={i} className="min-w-[120px] backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:max-w-md">
          <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-accent/30">
            <Image 
              src="/images/hero-bg.jpg"
              alt="Premium halal meat display"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}