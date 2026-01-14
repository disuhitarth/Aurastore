import Link from 'next/link'
import { Building2, Home, ClipboardCheck, Building, Hammer, Sparkles, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Complete management and coordination of construction projects from start to finish with expert oversight.',
      features: [
        'Expert Project Management',
        'Qualified Subcontractors',
        'Quality Workmanship',
        'Safety & Compliance',
        'Clear Communication',
      ],
      link: '/services/general-contracting',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Building,
      title: 'Commercial Renovations',
      description: 'Transform your business space with professional commercial renovation services for any industry.',
      features: [
        'Full Project Management',
        'Minimal Business Disruption',
        'Interior & Exterior Work',
        'Code Compliance & Permits',
        'Custom Solutions',
      ],
      link: '/services/commercial',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Home,
      title: 'Residential Renovations',
      description: 'Professional home remodeling services that increase comfort, functionality, and property value.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovations',
        'Basement Finishing',
        'Home Additions',
        'Interior & Exterior Work',
      ],
      link: '/services/residential',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Expert planning, coordination, and supervision for construction projects of any size.',
      features: [
        'Project Planning & Scheduling',
        'Budget Management',
        'Subcontractor Coordination',
        'Quality Assurance',
        'Permits & Compliance',
      ],
      link: '/services/project-management',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: Hammer,
      title: 'Property Management',
      description: 'Comprehensive property management services for rental properties, Airbnb, and commercial plazas.',
      features: [
        'Rental Properties',
        'Airbnb Management',
        'Commercial Plazas',
        'Maintenance Coordination',
        'Tenant Relations',
      ],
      link: '/services/property-management',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Sparkles,
      title: 'Design & Build',
      description: 'Complete design and construction services to turn your dream project into reality.',
      features: [
        'Concept Development',
        'Architectural Planning',
        'Interior Design',
        'Full Construction',
        'Turnkey Solutions',
      ],
      link: '/services/design-build',
      color: 'from-pink-500 to-pink-700',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-container text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our <span className="text-aura-gold">Services</span>
        </h1>
        <p className="text-xl text-aura-grey-dark max-w-3xl mx-auto">
          Comprehensive construction and renovation solutions for commercial and residential projects throughout the GTA
        </p>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-aura-gold"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-aura-gold transition-colors">
                {service.title}
              </h2>

              <p className="text-aura-grey-dark mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-aura-grey-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-aura-gold mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="btn-primary w-full flex items-center justify-center group-hover:bg-aura-gold-dark"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container mt-20">
        <div className="card bg-gradient-to-r from-aura-black to-aura-grey-dark text-white text-center p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-aura-grey-light mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate from our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get Free Estimate
            </Link>
            <Link href="/gallery" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-aura-black">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
