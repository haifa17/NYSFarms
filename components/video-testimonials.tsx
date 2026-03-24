'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Fatima Ahmed',
    role: 'Local Family',
    quote: 'The quality and freshness are unmatched. We\'ve been ordering from NYS Farms for 3 years now.',
    avatar: '/images/avatar-fatima.jpg',
    rating: 5
  },
  {
    name: 'Hassan Ibrahim',
    role: 'Restaurant Owner',
    quote: 'As a restaurant owner, I demand only the best. NYS Farms delivers consistent quality every single time.',
    avatar: '/images/avatar-hassan.jpg',
    rating: 5
  },
  {
    name: 'Amina Rashid',
    role: 'Community Leader',
    quote: 'Supporting halal businesses that care about quality and community is important. NYS Farms gets it right.',
    avatar: '/images/avatar-amina.jpg',
    rating: 5
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary">
            What Our Customers
            <span className="block text-transparent bg-gradient-to-r from-accent to-accent/70 bg-clip-text mt-2">Say</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear directly from families and businesses who trust NYS Farms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="border-2 border-accent/60 shadow-lg shadow-accent/20 transform -translate-y-2 transition-all duration-500 flex flex-col group cursor-pointer h-full bg-gradient-to-br from-card to-card/80">
                <div className="p-8 flex flex-col flex-1 space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/40 group-hover:border-accent transition-colors duration-300">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/70 italic flex-1 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Learn More Button with permanent hover state */}
                  <Button className="w-full bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/30 transform scale-105 transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
