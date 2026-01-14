'use client'

import Link from 'next/link'
import { ArrowRight, Star, Award, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative z-10 section-container text-center">
        {/* Simple badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-aura-grey/20 mb-8">
          <Star className="w-4 h-4 text-aura-gold fill-current" />
          <span className="text-sm font-medium text-aura-grey-dark">Award-Winning General Contractor</span>
        </div>

        {/* Clean headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-aura-black leading-tight">
          Building Excellence,<br />
          <span className="text-aura-gold">Delivering Dreams</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-aura-grey-dark leading-relaxed">
          Premium Commercial & Residential Construction Services in Brampton & the GTA
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-aura-gold hover:bg-aura-gold-dark text-white font-semibold rounded-lg transition-all duration-200"
          >
            <span className="flex items-center">
              Get Free Estimate
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 border border-aura-black text-aura-black hover:bg-aura-black hover:text-white font-semibold rounded-lg transition-all duration-200"
          >
            Explore Services
          </Link>
        </div>

        {/* Clean stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-8 border border-aura-grey/20 rounded-lg hover:border-aura-gold/30 transition-colors duration-200">
            <Award className="w-10 h-10 text-aura-gold mx-auto mb-4" />
            <div className="text-4xl font-bold text-aura-black mb-2">15+</div>
            <div className="text-sm text-aura-grey-dark">Years of Excellence</div>
          </div>

          <div className="p-8 border border-aura-grey/20 rounded-lg hover:border-aura-gold/30 transition-colors duration-200">
            <Star className="w-10 h-10 text-aura-gold fill-current mx-auto mb-4" />
            <div className="text-4xl font-bold text-aura-black mb-2">500+</div>
            <div className="text-sm text-aura-grey-dark">Projects Delivered</div>
          </div>

          <div className="p-8 border border-aura-grey/20 rounded-lg hover:border-aura-gold/30 transition-colors duration-200">
            <Shield className="w-10 h-10 text-aura-gold mx-auto mb-4" />
            <div className="text-4xl font-bold text-aura-black mb-2">100%</div>
            <div className="text-sm text-aura-grey-dark">Client Satisfaction</div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-aura-grey">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-aura-gold" />
            <span>Licensed & Insured</span>
          </div>
          <div className="w-px h-4 bg-aura-grey/30"></div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-aura-gold" />
            <span>Award-Winning</span>
          </div>
          <div className="w-px h-4 bg-aura-grey/30"></div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-aura-gold fill-current" />
            <span>5-Star Rated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
