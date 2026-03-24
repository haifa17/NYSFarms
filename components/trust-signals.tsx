'use client'

import { Card } from '@/components/ui/card'
import { Award, Leaf, Target, CheckCircle, Shield, Heart } from 'lucide-react'

const trustSignals = [
  {
    icon: Award,
    title: 'Halal Certified',
    description: 'All meat processed according to Islamic dietary law by certified halal professionals'
  },
  {
    icon: Shield,
    title: 'Food Safety',
    description: 'USDA inspected facilities with rigorous health and hygiene standards maintained'
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'Complete traceability from farm to table. Know exactly where your meat comes from'
  },
  {
    icon: Leaf,
    title: 'Responsible Sourcing',
    description: 'Partnership with ethical farms that prioritize animal welfare and sustainable practices'
  },
  {
    icon: Heart,
    title: 'Quality Guarantee',
    description: 'If you\'re not satisfied, we\'ll make it right. Your satisfaction is guaranteed'
  },
  {
    icon: CheckCircle,
    title: 'Expert Handling',
    description: 'Our master butchers have decades of experience in precision cutting and preparation'
  },
]

export default function TrustSignals() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-accent/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary">
            Why Families
            <span className="block text-transparent bg-gradient-to-r from-accent to-accent/70 bg-clip-text mt-2">Trust NYS Farms</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Built on a foundation of quality, integrity, and commitment to your family's well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="p-8 border-2 border-border hover:border-accent/60 transition-all duration-500 bg-card hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-2 group cursor-pointer h-full">
                  <div className="space-y-4">
                    <div className="inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{signal.title}</h3>
                    <p className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">{signal.description}</p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
