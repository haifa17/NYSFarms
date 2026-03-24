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
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Animated Background with Video-like Effect */}
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

      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 z-1 opacity-40">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-accent/40 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-accent/30 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/35 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-white">
          <div className={`space-y-6 transform transition-all duration-1000 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="bg-accent/30 text-white border-accent/50 border px-4 py-2 text-sm backdrop-blur-sm w-fit">
              🌟 Premium Halal Certified
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Premium Halal Meat
              <span className="block text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text mt-3">Delivered Fresh</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg leading-relaxed">
              Experience the finest halal-certified meats sourced responsibly and delivered straight to your door. Quality, trust, and authenticity in every cut.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 group">
              Shop Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className=" text-white bg-white/10 border-white/50 px-8">
              Learn More
            </Button>
          </div>

          {/* Quick Stats - Animated Cards */}
          <div className={`flex gap-8 pt-6 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { value: '2,500+', label: 'Happy Customers' },
              { value: '99.8%', label: 'Satisfaction Rate' },
              { value: '48hrs', label: 'Fresh Delivery' }
            ].map((stat, i) => (
              <div key={i} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-3 hover:bg-white/15 transition-all duration-300 hover:border-accent/40 cursor-pointer group">
                <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual - Animated Image */}
        <div className={`relative h-96 w-full lg:max-w-md transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden border-2 border-accent/30 backdrop-blur-sm group cursor-pointer animate-glow">
            <Image 
              src="/images/hero-bg.jpg"
              alt="Premium halal meat display"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
            <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl group-hover:border-accent/50 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
