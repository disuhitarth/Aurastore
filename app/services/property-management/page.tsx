import Link from 'next/link'
import { Hammer, Home, Building2, Key, Wrench, Users } from 'lucide-react'

export default function PropertyManagementPage() {
  const services = [
    {
      icon: Home,
      title: 'Rental Properties',
      description: 'Complete management services for residential rental properties including maintenance, tenant screening, rent collection, and property inspections.',
      features: [
        'Tenant screening and placement',
        'Rent collection and accounting',
        'Regular property inspections',
        'Maintenance coordination',
        'Emergency repairs',
        'Lease management',
      ],
    },
    {
      icon: Key,
      title: 'Airbnb Management',
      description: 'Full-service Airbnb property management including guest communication, cleaning coordination, pricing optimization, and listing management.',
      features: [
        'Guest communication 24/7',
        'Professional cleaning coordination',
        'Dynamic pricing strategies',
        'Listing optimization',
        'Review management',
        'Maintenance and repairs',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Plazas',
      description: 'Comprehensive management for commercial properties including tenant relations, maintenance, common area upkeep, and property improvements.',
      features: [
        'Tenant relations',
        'Common area maintenance',
        'Building repairs and upgrades',
        'Vendor coordination',
        'Emergency response',
        'Capital improvements',
      ],
    },
  ]

  const benefits = [
    {
      title: 'Peace of Mind',
      description: 'Focus on your life or business while we handle all property management responsibilities.',
    },
    {
      title: 'Maximize Income',
      description: 'Our strategies help maximize rental income and property value.',
    },
    {
      title: 'Reduce Vacancy',
      description: 'Professional marketing and tenant screening minimize vacancy periods.',
    },
    {
      title: 'Professional Maintenance',
      description: 'Regular maintenance prevents costly repairs and keeps tenants happy.',
    },
    {
      title: '24/7 Support',
      description: 'Emergency response available around the clock for urgent issues.',
    },
    {
      title: 'Compliance & Legal',
      description: 'Stay compliant with all local regulations and landlord-tenant laws.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white py-20">
        <div className="section-container text-center">
          <Hammer className="w-20 h-20 mx-auto mb-6 text-aura-gold" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Property <span className="text-aura-gold">Management</span>
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Comprehensive Property Management Services for Rental Properties, Airbnb, and Commercial Plazas
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Professional <span className="text-aura-gold">Property Management</span> You Can Trust
          </h2>

          <div className="text-lg text-aura-grey-dark leading-relaxed space-y-6">
            <p>
              Managing properties requires time, expertise, and constant attention. Whether you own rental properties,
              operate Airbnb listings, or manage commercial plazas, our comprehensive property management services handle
              every aspect of your investment.
            </p>

            <p>
              From tenant relations to maintenance coordination, we ensure your properties are well-maintained, profitable,
              and hassle-free for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Property <span className="text-aura-gold">Management Services</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card bg-white hover:shadow-2xl transition-all h-full">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-aura-gold">{service.title}</h3>
                <p className="text-aura-grey-dark mb-6">{service.description}</p>

                <div className="border-t border-aura-grey pt-4">
                  <h4 className="font-semibold mb-3 text-aura-black">What We Handle:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-aura-grey-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-aura-gold mr-2 mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose Our <span className="text-aura-gold">Property Management</span> Services?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-aura-grey-light hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">{benefit.title}</h3>
              <p className="text-aura-grey-dark">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Sets Us <span className="text-aura-gold">Apart</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="card bg-white/10 backdrop-blur-sm border border-aura-gold/30">
              <div className="flex items-start">
                <Wrench className="w-8 h-8 text-aura-gold mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-aura-gold">Construction Expertise</h3>
                  <p className="text-aura-grey-light">
                    As experienced general contractors, we bring unique value to property management. We can assess
                    maintenance needs accurately, coordinate repairs efficiently, and handle property improvements
                    in-house—saving you time and money.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-sm border border-aura-gold/30">
              <div className="flex items-start">
                <Users className="w-8 h-8 text-aura-gold mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-aura-gold">Responsive Communication</h3>
                  <p className="text-aura-grey-light">
                    We maintain clear, consistent communication with property owners and tenants. You'll receive
                    regular updates, financial reports, and quick responses to any concerns or questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-sm border border-aura-gold/30">
              <div className="flex items-start">
                <Building2 className="w-8 h-8 text-aura-gold mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-aura-gold">Property Value Protection</h3>
                  <p className="text-aura-grey-light">
                    We don't just manage—we protect and enhance your investment. Our proactive maintenance approach
                    and strategic improvements help increase property value over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="card bg-gradient-to-br from-aura-grey-light to-white text-center p-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your <span className="text-aura-gold">Property Management?</span>
          </h2>

          <p className="text-xl text-aura-grey-dark max-w-3xl mx-auto mb-8">
            Let us handle the day-to-day responsibilities while you enjoy the benefits of property ownership.
            Contact us today to discuss your property management needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="btn-outline text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
