'use client'

import { Card } from '@/components/ui/card'
import { ShoppingCart, MapPin, CheckCircle, Truck } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    icon: ShoppingCart,
    number: '1',
    title: 'Browse & Select',
    description: 'Explore our selection of premium halal meats and choose what suits your needs',
    image: '/images/premium-beef.jpg'
  },
  {
    icon: CheckCircle,
    number: '2',
    title: 'Customize Your Order',
    description: 'Select cuts, portion sizes, and specify any special preparation requests',
    image: '/images/specialty-cuts.jpg'
  },
  {
    icon: Truck,
    number: '3',
    title: 'Fresh Delivery',
    description: 'Receive your order packaged fresh and delivered right to your door',
    image: '/images/delivery.jpg'
  },
  {
    icon: MapPin,
    number: '4',
    title: 'Cook & Enjoy',
    description: 'Use our recipe guides and preparation tips to create delicious meals',
    image: '/images/certification.jpg'
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary">
            How It
            <span className="block text-transparent bg-gradient-to-r from-accent to-accent/70 bg-clip-text mt-2">Works</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Four simple steps to get premium halal meat delivered fresh to your door
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="overflow-hidden h-full border-2 border-border hover:border-accent/70 transition-all duration-500 bg-card flex flex-col group hover:shadow-xl hover:shadow-accent/20 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image 
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-3xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">{step.number}</div>
                      </div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                      <p className="text-foreground/70 text-sm">{step.description}</p>
                    </div>
                  </div>
                </Card>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/20 transform -translate-y-1/2 group-hover:bg-accent/50 transition-colors duration-300"></div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 animate-fade-in-up bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-2xl p-8 lg:p-12 backdrop-blur-sm hover:border-accent/40 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '2-3 Days', label: 'Standard Delivery' },
              { value: '100%', label: 'Satisfaction Guaranteed' },
              { value: '24/7', label: 'Customer Support' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300 group-hover:scale-110 transform">{item.value}</div>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
