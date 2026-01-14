'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-aura-black/70 via-aura-black/50 to-aura-black/70 z-10"></div>

      <div className="relative z-20 section-container text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Building Excellence,<br />
          <span className="text-aura-gold">Delivering Dreams</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-aura-grey-light animate-slide-in">
          Professional Commercial & Residential Construction Services in Brampton and the GTA
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get Free Estimate
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </Link>
          <Link href="/services" className="btn-outline text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">
            Our Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="card bg-white/10 backdrop-blur-md border border-aura-gold/30">
            <div className="text-4xl font-bold text-aura-gold mb-2">15+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          <div className="card bg-white/10 backdrop-blur-md border border-aura-gold/30">
            <div className="text-4xl font-bold text-aura-gold mb-2">500+</div>
            <div className="text-lg">Projects Completed</div>
          </div>
          <div className="card bg-white/10 backdrop-blur-md border border-aura-gold/30">
            <div className="text-4xl font-bold text-aura-gold mb-2">100%</div>
            <div className="text-lg">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
