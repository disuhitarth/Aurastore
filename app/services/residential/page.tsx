import Link from 'next/link'
import { Home, CheckCircle, DollarSign, Wrench, PaintBucket, Hammer } from 'lucide-react'

export default function ResidentialPage() {
  const services = [
    {
      icon: PaintBucket,
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen with new layouts, custom cabinetry, countertops, lighting, flooring, and modern finishes. A professionally remodeled kitchen increases home value and enhances everyday living.',
    },
    {
      icon: Home,
      title: 'Bathroom Renovations',
      description: 'We upgrade bathrooms with new tile work, vanities, showers, tubs, lighting, and storage solutions. Our bathroom renovation services focus on comfort, beauty, and long-lasting durability.',
    },
    {
      icon: Hammer,
      title: 'Basement Finishing & Remodeling',
      description: 'Turn your basement into a functional living space—perfect for entertainment, extra bedrooms, home gyms, offices, and more. We specialize in waterproofing, framing, flooring, and complete basement transformations.',
    },
    {
      icon: Wrench,
      title: 'Home Additions & Expansions',
      description: 'Need more space? We build room additions, second-story expansions, garage conversions, and custom home extensions that blend seamlessly with your existing structure.',
    },
    {
      icon: CheckCircle,
      title: 'Interior & Exterior Renovations',
      description: 'From flooring, painting, drywall, and trim to siding, roofing, decks, patios, windows, and doors—we enhance both the interior and exterior of your home to improve appearance and durability.',
    },
  ]

  const benefits = [
    'Increase property value',
    'Improve energy efficiency',
    'Modernize outdated spaces',
    'Add more functional living space',
    'Enhance comfort and lifestyle',
    'Improve curb appeal',
  ]

  const whyChoose = [
    'Licensed and experienced renovation professionals',
    'High-quality craftsmanship and materials',
    'On-time and on-budget project delivery',
    'Stress-free project management from start to finish',
    'Clear communication and detailed planning',
    'Fully compliant with local building codes and permits',
  ]

  const propertyTypes = [
    {
      title: 'Rental Properties',
      description: 'Maximize your rental income with strategic renovations that attract quality tenants and increase property value.',
      icon: Home,
    },
    {
      title: 'Flipping Properties / Investment Sector',
      description: 'Partner with us for investment property renovations. We help maximize ROI with cost-effective, high-impact improvements.',
      icon: DollarSign,
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-900 text-white py-20">
        <div className="section-container text-center">
          <Home className="w-20 h-20 mx-auto mb-6 text-aura-gold" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Residential <span className="text-aura-gold">Renovations</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Professional Home Remodeling Services That Transform Your Living Space
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Upgrade Your Home with <span className="text-aura-gold">Expert Renovations</span>
          </h2>

          <div className="text-lg text-aura-grey-dark leading-relaxed space-y-6">
            <p>
              Looking to upgrade your home with high-quality residential renovations? We provide professional, reliable,
              and affordable home remodeling services designed to increase comfort, improve functionality, and boost the
              value of your property.
            </p>

            <p>
              Whether you need a full home renovation or a simple room upgrade, our skilled team delivers results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Top-Rated <span className="text-aura-gold">Residential</span> Renovation Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="card bg-white hover:shadow-2xl transition-all">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-aura-grey-dark">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose Us for Your <span className="text-aura-gold">Residential Renovation?</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChoose.map((reason, index) => (
            <div key={index} className="card bg-aura-grey-light flex items-start">
              <CheckCircle className="w-6 h-6 text-aura-gold mr-3 flex-shrink-0 mt-1" />
              <p className="text-aura-grey-dark">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Benefits of <span className="text-aura-gold">Renovating</span> Your Home
          </h2>

          <p className="text-xl text-center text-aura-grey-light mb-12 max-w-3xl mx-auto">
            A professional home renovation can:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-aura-gold/30 rounded-lg p-6 hover:bg-white/20 transition-all"
              >
                <CheckCircle className="w-8 h-8 text-aura-gold mb-3" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Specialized Services for <span className="text-aura-gold">Investors</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {propertyTypes.map((type, index) => (
            <div key={index} className="card bg-gradient-to-br from-aura-grey-light to-white hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center mb-4">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-aura-gold">{type.title}</h3>
              <p className="text-aura-grey-dark text-lg">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary text-lg">
            Request Investment Property Quote
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Residential Renovation Experts <span className="text-aura-gold">You Can Trust</span>
          </h2>

          <p className="text-xl text-aura-grey-dark max-w-3xl mx-auto mb-8">
            We are committed to delivering top-quality results that meet your vision, budget, and timeline.
            Whether you're planning a full home remodel or a small improvement project, we bring your ideas
            to life with precision and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get Free Estimate
            </Link>
            <Link href="/gallery" className="btn-outline text-lg">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
