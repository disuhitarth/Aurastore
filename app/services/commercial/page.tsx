import Link from 'next/link'
import { Building, CheckCircle, Briefcase, TrendingUp, Shield, Clock } from 'lucide-react'

export default function CommercialPage() {
  const businessTypes = [
    'Retail Stores',
    'Restaurants & Cafés',
    'Office Buildings',
    'Medical Offices & Clinics',
    'Warehouses & Industrial Facilities',
    'Grocery Stores & Supermarkets',
    'Salons & Barbershops',
    'Hotels & Hospitality Spaces',
    'Convenience Stores',
    'Gas Stations',
    'Fitness Centers & Gyms',
    'Auto Repair Shops & Dealerships',
    'Commercial Kitchens',
    'Multi-unit Commercial Complexes',
    'Daycare Centers & Educational Facilities',
    'Showrooms & Display Centers',
    'Storage Facilities',
    'Boutiques & Specialty Shops',
    'Banks & Financial Institutions',
    'Pharmacies',
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improve Customer Impressions',
      description: 'Create a welcoming, professional environment that attracts and retains customers.',
    },
    {
      icon: Briefcase,
      title: 'Boost Employee Productivity',
      description: 'Better workspace design improves morale, efficiency, and job satisfaction.',
    },
    {
      icon: Shield,
      title: 'Increase Property Value',
      description: 'Quality renovations significantly increase your commercial property value.',
    },
    {
      icon: Building,
      title: 'Better Brand Image',
      description: 'Your space reflects your brand—make it count with professional renovations.',
    },
    {
      icon: CheckCircle,
      title: 'Energy Efficiency',
      description: 'Modern upgrades reduce energy costs and environmental impact.',
    },
    {
      icon: Clock,
      title: 'Support Business Growth',
      description: 'Optimized spaces support scaling operations and business expansion.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white py-20">
        <div className="section-container text-center">
          <Building className="w-20 h-20 mx-auto mb-6 text-aura-gold" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Commercial <span className="text-aura-gold">Renovations</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Transform your business space with professional renovation services tailored to your industry
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Elevate Your <span className="text-aura-gold">Business Space</span>
          </h2>

          <div className="text-lg text-aura-grey-dark leading-relaxed space-y-6">
            <p>
              Commercial renovations are essential for businesses looking to improve functionality, modernize their space,
              or create a better experience for customers and employees. Our commercial renovation services are designed
              to transform your existing property into a more efficient, attractive, and productive environment that supports
              your business goals.
            </p>

            <p>
              Whether you're updating an office, retail store, restaurant, warehouse, or multi-unit building, we handle every
              stage of the renovation with precision and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We <span className="text-aura-gold">Provide</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Full Project Management</h3>
              <p className="text-aura-grey-dark">
                We oversee the entire renovation process—from planning and design coordination to construction and final
                finishes—so your project runs smoothly and stays on schedule.
              </p>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Minimal Business Disruption</h3>
              <p className="text-aura-grey-dark">
                We plan construction around your operating hours, implement safety measures, and work efficiently to keep
                your business running with as little interruption as possible.
              </p>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Interior & Exterior Renovations</h3>
              <p className="text-aura-grey-dark">
                From structural upgrades and layout changes to flooring, painting, lighting, signage, entrances, and more,
                we improve both the look and function of your space.
              </p>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Code Compliance & Permits</h3>
              <p className="text-aura-grey-dark">
                Commercial projects require strict adherence to building codes, safety regulations, and permit requirements.
                We make sure everything is done properly and meets inspection standards.
              </p>
            </div>

            <div className="card bg-white md:col-span-2">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Custom Solutions for Every Industry</h3>
              <p className="text-aura-grey-dark">
                Every business is unique. We tailor our renovation approach to meet your industry's needs—whether it's
                customer flow, employee workspace, storage efficiency, or aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commercial Renovations Matter */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Commercial Renovations <span className="text-aura-gold">Matter</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-aura-grey-dark">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Businesses */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Types of <span className="text-aura-gold">Businesses</span> We Renovate
          </h2>

          <p className="text-xl text-center text-aura-grey-light mb-12 max-w-3xl mx-auto">
            We provide renovation services for a wide range of commercial properties
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {businessTypes.map((business, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-aura-gold/30 rounded-lg p-4 hover:bg-white/20 transition-all text-center"
              >
                <CheckCircle className="w-5 h-5 text-aura-gold mx-auto mb-2" />
                <span className="text-sm">{business}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-aura-grey-light text-lg mb-6">
              ...and many more! If your business needs renovation, we can help.
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Aura */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Why Do Business with <span className="text-aura-gold">Aura?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-aura-grey-light">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Industry Expertise</h3>
              <p className="text-aura-grey-dark">
                Years of experience across multiple commercial sectors means we understand the unique needs of your business.
              </p>
            </div>

            <div className="card bg-aura-grey-light">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Quality Results</h3>
              <p className="text-aura-grey-dark">
                We deliver exceptional craftsmanship that stands the test of time and reflects positively on your brand.
              </p>
            </div>

            <div className="card bg-aura-grey-light">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">On-Time, On-Budget</h3>
              <p className="text-aura-grey-dark">
                We respect your timelines and budget, ensuring minimal disruption to your business operations.
              </p>
            </div>

            <div className="card bg-aura-grey-light">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Full Service</h3>
              <p className="text-aura-grey-dark">
                From permits to final walkthrough, we handle every aspect of your commercial renovation project.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/gallery" className="btn-primary text-lg mr-4">
              View Our Portfolio
            </Link>
            <Link href="/contact" className="btn-outline text-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
