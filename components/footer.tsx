'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-accent/80 bg-clip-text text-transparent">NYS Farms</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium halal-certified meat delivery. Quality, integrity, and care in every cut.
            </p>
          </div>

          {/* Products */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#products" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Beef Selection</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Poultry</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Specialty Cuts</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Custom Orders</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#about" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Recipes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300 cursor-pointer group">
                <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <a href="tel:(518)555-0123">(518) 555-0123</a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300 cursor-pointer group">
                <Mail size={16} className="group-hover:-rotate-12 transition-transform duration-300" />
                <a href="mailto:info@nysfarms.com">info@nysfarms.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 animate-fade-in-up">
          <p>&copy; 2026 NYS Farms. All rights reserved. | Halal Certified 🌟</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
