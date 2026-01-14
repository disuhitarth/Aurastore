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
    },
    {
      icon: Building,
      title: 'Commercial Renovations',
      description: 'Transform your business space with professional commercial renovation services.',
      link: '/services/commercial',
    },
    {
      icon: Home,
      title: 'Residential Renovations',
      description: 'Upgrade your home with high-quality remodeling that increases value and comfort.',
      link: '/services/residential',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Expert planning and coordination to keep your project on time and on budget.',
      link: '/services/project-management',
    },
    {
      icon: Hammer,
      title: 'Property Management',
      description: 'Comprehensive management for rental properties, Airbnb, and commercial plazas.',
      link: '/services/property-management',
    },
    {
      icon: Sparkles,
      title: 'Design & Build',
      description: 'Turn your dream project into reality with our complete design and build services.',
      link: '/services/design-build',
    },
  ]

  return (
    <section className="relative bg-aura-grey-light py-24">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full border border-aura-grey/20 mb-6">
            <span className="text-xs font-medium text-aura-grey-dark tracking-wider">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aura-black">
            Our <span className="text-aura-gold">Services</span>
          </h2>
          <p className="text-lg text-aura-grey-dark max-w-2xl mx-auto">
            Comprehensive construction and renovation solutions delivered with excellence and precision
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="group">
              <div className="h-full bg-white rounded-lg p-8 border border-aura-grey/20 hover:border-aura-gold/50 hover:shadow-lg transition-all duration-200">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-aura-grey-light mb-6">
                  <service.icon className="w-8 h-8 text-aura-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-aura-black">
                  {service.title}
                </h3>
                <p className="text-aura-grey-dark text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-aura-gold text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-aura-black text-white font-semibold rounded-lg hover:bg-aura-gold transition-colors duration-200 group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
