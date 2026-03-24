'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const products = [
  {
    name: 'Premium Beef Selection',
    description: 'Hand-selected halal beef cuts, aged for maximum tenderness and flavor',
    price: 'From $18/lb',
    items: ['NY Strip Steaks', 'Ribeyes', 'Ground Beef', 'Lamb Steaks'],
    badge: 'Best Seller',
    image: '/images/premium-beef.jpg',
    alt: 'Premium halal beef cuts'
  },
  {
    name: 'Poultry Collection',
    description: 'Fresh halal chicken and turkey, humanely raised and expertly butchered',
    price: 'From $8/lb',
    items: ['Whole Birds', 'Breasts', 'Thighs', 'Ground Chicken'],
    badge: 'Popular',
    image: '/images/fresh-poultry.jpg',
    alt: 'Fresh halal poultry'
  },
  {
    name: 'Specialty Cuts',
    description: 'Custom cuts and special orders available. Talk to our expert butchers',
    price: 'Custom Pricing',
    items: ['Custom Orders', 'Bulk Packages', 'Catering', 'Halal Processing'],
    badge: 'Custom',
    image: '/images/specialty-cuts.jpg',
    alt: 'Specialty halal cuts'
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-0 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary">
            Our Premium
            <span className="block text-transparent bg-gradient-to-r from-accent to-accent/70 bg-clip-text mt-2">Collections</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our selection of premium halal meats, carefully sourced and expertly prepared with care and authenticity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="overflow-hidden border-2 border-border hover:border-accent/70 transition-all duration-500 bg-card flex flex-col group hover:shadow-2xl hover:shadow-accent/25 transform hover:-translate-y-3 cursor-pointer h-full">
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <Image 
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{product.name}</h3>
                    <Badge className="bg-accent/80 text-accent-foreground hover:bg-accent transition-all duration-300 animate-glow">{product.badge}</Badge>
                  </div>

                  <p className="text-foreground/70 mb-6 flex-1">{product.description}</p>
                  
                  <div className="space-y-4">
                    <div className="text-xl font-bold text-accent group-hover:text-accent/80 transition-colors duration-300">{product.price}</div>
                    
                    <div className="space-y-2">
                      {product.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-accent/60 transition-colors"></div>
                          {item}
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/30">
                      View Details
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-foreground/70 mb-6 text-lg font-medium">Don't see what you're looking for?</p>
          <button className="text-accent font-semibold hover:text-accent/80 flex items-center gap-2 justify-center mx-auto group transition-all duration-300 hover:gap-3">
            Request Custom Orders
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
