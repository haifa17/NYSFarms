'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-red-900 backdrop-blur-sm ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/"  className='w-52 -ml-5 sm:-ml-18'>
        <img src="/NYSLOGO_white_transparent.png" className=''/>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-md font-medium   transition">Products</a>
          <a href="#about" className="text-md font-medium text-white transition">About</a>
          <a href="#how-it-works" className="text-md font-medium text-white transition">How It Works</a>
          <a href="#contact" className="text-md font-medium text-white transition">Contact</a>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu className='text-white' size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <a href="#products" className="block text-sm font-medium text-foreground/80 hover:text-foreground">Products</a>
            <a href="#about" className="block text-sm font-medium text-foreground/80 hover:text-foreground">About</a>
            <a href="#how-it-works" className="block text-sm font-medium text-foreground/80 hover:text-foreground">How It Works</a>
            <a href="#contact" className="block text-sm font-medium text-foreground/80 hover:text-foreground">Contact</a>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
