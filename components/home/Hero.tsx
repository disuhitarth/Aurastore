'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Award, Shield } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-aura-black via-aura-grey-dark to-aura-black">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-aura-gold opacity-20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-aura-gold-light opacity-20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '1s',
          }}
        ></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-aura-gold rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 border-2 border-aura-gold rotate-12 animate-spin-slower"></div>
        </div>
      </div>

      {/* Premium overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aura-black/30 to-aura-black/50 z-10"></div>

      <div className="relative z-20 section-container text-center text-white">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-aura-gold/30 mb-8 animate-scale-in">
          <Star className="w-4 h-4 text-aura-gold fill-current" />
          <span className="text-sm font-semibold">Award-Winning General Contractor</span>
          <Star className="w-4 h-4 text-aura-gold fill-current" />
        </div>

        {/* Main headline with gradient text */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in leading-tight">
          Building Excellence,<br />
          <span className="gradient-text">Delivering Dreams</span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 animate-slide-in leading-relaxed">
          Premium Commercial & Residential Construction Services in <span className="text-aura-gold font-semibold">Brampton & the GTA</span>
        </p>

        {/* Premium CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-in">
          <Link
            href="/contact"
            className="group relative px-10 py-5 bg-gradient-to-r from-aura-gold-dark via-aura-gold to-aura-gold-light text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-aura-gold/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              Get Free Estimate
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          <Link
            href="/services"
            className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white hover:text-aura-black transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </Link>
        </div>

        {/* Premium stats cards with 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-aura-gold-dark to-aura-gold rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-aura-gold/30 rounded-2xl p-8 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <Award className="w-12 h-12 text-aura-gold mx-auto mb-4" />
              <div className="text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-lg text-gray-300">Years of Excellence</div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-aura-gold to-aura-gold-light rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-aura-gold/30 rounded-2xl p-8 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <Star className="w-12 h-12 text-aura-gold fill-current mx-auto mb-4" />
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-lg text-gray-300">Projects Delivered</div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-aura-gold-light to-aura-gold-dark rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-aura-gold/30 rounded-2xl p-8 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <Shield className="w-12 h-12 text-aura-gold mx-auto mb-4" />
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-lg text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-aura-gold" />
            <span>Licensed & Insured</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-aura-gold" />
            <span>Award-Winning</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-aura-gold fill-current" />
            <span>5-Star Rated</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-aura-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
