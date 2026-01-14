'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, Star } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl'
          : 'bg-white/70 backdrop-blur-md shadow-lg'
      }`}
    >
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-aura-black via-aura-grey-dark to-aura-black text-white py-2.5 border-b border-aura-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:647-391-3292"
                className="flex items-center hover:text-aura-gold transition-all group"
              >
                <div className="p-1.5 rounded-full bg-aura-gold/10 group-hover:bg-aura-gold/20 transition-all mr-2">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">647-391-3292</span>
              </a>
              <a
                href="mailto:info@aurarenovations.ca"
                className="hidden md:flex items-center hover:text-aura-gold transition-all group"
              >
                <div className="p-1.5 rounded-full bg-aura-gold/10 group-hover:bg-aura-gold/20 transition-all mr-2">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">info@aurarenovations.ca</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-aura-gold/10 border border-aura-gold/20">
                <Star className="w-3 h-3 text-aura-gold fill-current" />
                <span className="text-xs font-semibold text-aura-gold">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with gradient */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-aura-black group-hover:text-aura-grey-dark transition-colors">AURA</span>
              <span className="gradient-text"> RENOVATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-aura-black hover:text-aura-gold font-semibold text-sm transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-aura-gold-dark to-aura-gold-light group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-aura-gold-dark via-aura-gold to-aura-gold-light text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-aura-gold/50 transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-aura-black hover:bg-aura-gold/10 hover:text-aura-gold transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation with premium style */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-in">
            <div className="bg-gradient-to-b from-white/50 to-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-aura-gold/10">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-aura-black hover:text-aura-gold font-semibold transition-all rounded-lg hover:bg-aura-gold/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-aura-gold-dark via-aura-gold to-aura-gold-light text-white font-bold text-center rounded-lg shadow-lg hover:shadow-aura-gold/50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
