import Link from 'next/link'
import { Building2, Home, ClipboardCheck, Building, Hammer, Sparkles } from 'lucide-react'

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
    <section className="relative z-30 bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-aura-gold">Services</span>
          </h2>
          <p className="text-xl text-aura-grey-dark max-w-2xl mx-auto">
            Comprehensive construction and renovation solutions for commercial and residential projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <div className="card group hover:border-aura-gold hover:border-2 cursor-pointer h-full">
                <service.icon className="w-12 h-12 text-aura-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-aura-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-aura-grey-dark">
                  {service.description}
                </p>
                <div className="mt-4 text-aura-gold font-semibold group-hover:underline">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary text-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
