'use client'

import Link from 'next/link'
import { Building2, Home, ClipboardCheck, Building, Hammer, Sparkles, ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Complete project management from start to finish with expert coordination and quality control.',
      link: '/services/general-contracting',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500',
      borderGlow: 'group-hover:shadow-blue-500/50',
    },
    {
      icon: Building,
      title: 'Commercial Renovations',
      description: 'Transform your business space with professional commercial renovation services.',
      link: '/services/commercial',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
      borderGlow: 'group-hover:shadow-purple-500/50',
    },
    {
      icon: Home,
      title: 'Residential Renovations',
      description: 'Upgrade your home with high-quality remodeling that increases value and comfort.',
      link: '/services/residential',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500',
      borderGlow: 'group-hover:shadow-green-500/50',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Expert planning and coordination to keep your project on time and on budget.',
      link: '/services/project-management',
      gradient: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-500',
      borderGlow: 'group-hover:shadow-orange-500/50',
    },
    {
      icon: Hammer,
      title: 'Property Management',
      description: 'Comprehensive management for rental properties, Airbnb, and commercial plazas.',
      link: '/services/property-management',
      gradient: 'from-red-500/20 to-rose-500/20',
      iconColor: 'text-red-500',
      borderGlow: 'group-hover:shadow-red-500/50',
    },
    {
      icon: Sparkles,
      title: 'Design & Build',
      description: 'Turn your dream project into reality with our complete design and build services.',
      link: '/services/design-build',
      gradient: 'from-yellow-500/20 to-aura-gold/20',
      iconColor: 'text-aura-gold',
      borderGlow: 'group-hover:shadow-aura-gold/50',
    },
  ]

  return (
    <section className="relative z-30 bg-gradient-to-b from-white via-aura-grey-light to-white py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-container relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-aura-gold/10 border border-aura-gold/30 mb-6">
            <span className="text-sm font-semibold text-aura-gold">WHAT WE OFFER</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-aura-grey-dark max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and renovation solutions delivered with excellence and precision
          </p>
        </div>

        {/* Services grid with 3D cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="group">
              <div className="relative h-full">
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 ${service.borderGlow}`}></div>

                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-3 border border-gray-100">
                  {/* Icon container with gradient background */}
                  <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                    <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-aura-black group-hover:text-aura-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-aura-grey-dark leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-aura-gold font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-aura-gold-dark via-aura-gold to-aura-gold-light text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-aura-gold/50 transition-all duration-300 hover:scale-105 group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
