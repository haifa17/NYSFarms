'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function OurStory() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
                Our
                <span className="block text-transparent bg-gradient-to-r from-accent to-accent/70 bg-clip-text mt-2">Story</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                NYS Farms was founded with a simple mission: to provide communities with the highest quality halal-certified meats, processed with integrity and delivered with care.
              </p>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                We believe that quality meat starts with how animals are raised and cared for. That's why we partner exclusively with farms that share our commitment to animal welfare and sustainable practices.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Every cut is handled by our master butchers with precision and expertise, ensuring that what arrives at your table meets our uncompromising standards.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: '100%', label: 'Halal Certified' },
                { value: '20+', label: 'Years Experience' },
                { value: '10K+', label: 'Happy Families' }
              ].map((stat, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300 group-hover:scale-110 transform">{stat.value}</div>
                  <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden border-2 border-accent/20 group cursor-pointer animate-slide-in-right animate-glow">
            <Image 
              src="/images/team.jpg"
              alt="NYS Farms professional butcher team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl group-hover:border-accent/50 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
