'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/40 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-4">
                Get In
                <span className="block text-accent mt-2">Touch</span>
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Have questions? Want to place a custom order? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Call Us', detail: '(518) 555-0123', subtext: 'Mon-Fri, 9am-6pm EST' },
                { icon: Mail, title: 'Email', detail: 'info@nysfarms.com', subtext: 'We respond within 24 hours' },
                { icon: MapPin, title: 'Visit Us', detail: '123 Farm Road', subtext: 'Hudson, NY 12534' }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent mt-1 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                      <p className="text-primary-foreground/80">{item.detail}</p>
                      <p className="text-primary-foreground/60 text-sm">{item.subtext}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-8 border-t border-primary-foreground/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <p className="text-sm text-primary-foreground/70 mb-4">Follow us for recipes & tips:</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social, i) => (
                  <a key={i} href="#" className="hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">{social}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary-foreground/10 to-accent/5 rounded-2xl p-8 border-2 border-primary-foreground/20 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-primary text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-primary text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-primary text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 font-semibold"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
