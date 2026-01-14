import Link from 'next/link'
import { Sparkles, Lightbulb, Ruler, Hammer, CheckCircle, Users } from 'lucide-react'

export default function DesignBuildPage() {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'We start by understanding your vision, needs, and budget. Our team works with you to develop initial concepts and ideas.',
      step: '01',
    },
    {
      icon: Ruler,
      title: 'Design & Planning',
      description: 'Our designers create detailed plans, drawings, and 3D visualizations to bring your project to life before construction begins.',
      step: '02',
    },
    {
      icon: CheckCircle,
      title: 'Budget & Timeline',
      description: 'We provide transparent pricing and realistic timelines, ensuring you know exactly what to expect throughout the project.',
      step: '03',
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Our skilled team brings the design to reality with expert craftsmanship, quality materials, and professional project management.',
      step: '04',
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Single Point of Contact',
      description: 'One team handles both design and construction, streamlining communication and decision-making.',
    },
    {
      icon: CheckCircle,
      title: 'Seamless Process',
      description: 'No disconnection between design and build teams—ensuring your vision is executed exactly as planned.',
    },
    {
      icon: Lightbulb,
      title: 'Cost Efficiency',
      description: 'Integrated approach reduces costs through better coordination and fewer change orders.',
    },
    {
      icon: Hammer,
      title: 'Faster Completion',
      description: 'Overlapping design and construction phases speeds up overall project timeline.',
    },
    {
      icon: Sparkles,
      title: 'Quality Control',
      description: 'Our team maintains quality standards from initial concept through final completion.',
    },
    {
      icon: Ruler,
      title: 'Design Flexibility',
      description: 'Our construction expertise informs smarter design decisions and creative solutions.',
    },
  ]

  const projectTypes = [
    'Custom Home Construction',
    'Home Additions & Extensions',
    'Complete Home Renovations',
    'Kitchen & Bathroom Remodels',
    'Basement Developments',
    'Commercial Buildouts',
    'Restaurant & Retail Design-Build',
    'Office Space Construction',
    'Multi-Unit Residential',
    'Mixed-Use Developments',
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-900 via-pink-700 to-pink-900 text-white py-20">
        <div className="section-container text-center">
          <Sparkles className="w-20 h-20 mx-auto mb-6 text-aura-gold" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design <span className="text-aura-gold">&</span> Build
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Design Your Dream Project with Aura – From Idea to Creation
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Turn Your Vision into <span className="text-aura-gold">Reality</span>
          </h2>

          <div className="text-lg text-aura-grey-dark leading-relaxed space-y-6">
            <p>
              Design-build is a revolutionary approach to construction that combines architectural design and construction
              services under one roof. Instead of hiring separate designers and contractors, our integrated team handles
              your entire project from the first sketch to the final walkthrough.
            </p>

            <p>
              This streamlined approach saves time, reduces costs, and ensures your vision is executed perfectly—because
              the people designing your project are the same people building it.
            </p>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Design-Build <span className="text-aura-gold">Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="card bg-white hover:shadow-2xl transition-all h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-aura-gold text-aura-black flex items-center justify-center font-bold text-lg shadow-lg">
                    {phase.step}
                  </div>

                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center mb-4">
                    <phase.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-aura-grey-dark">{phase.description}</p>
                </div>

                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-aura-gold"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Benefits of <span className="text-aura-gold">Design-Build</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-aura-grey-dark">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How <span className="text-aura-gold">Design-Build</span> Works
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="card bg-white/10 backdrop-blur-sm border border-aura-gold/30">
              <h3 className="text-2xl font-bold mb-3 text-aura-gold">Traditional Approach (Design-Bid-Build)</h3>
              <p className="text-aura-grey-light mb-4">
                1. Hire an architect → 2. Get design → 3. Bid to contractors → 4. Select contractor → 5. Start construction
              </p>
              <p className="text-sm text-red-300">
                ❌ Multiple contracts, potential miscommunication, design changes, delays, finger-pointing
              </p>
            </div>

            <div className="card bg-aura-gold text-aura-black">
              <h3 className="text-2xl font-bold mb-3">Aura's Design-Build Approach</h3>
              <p className="mb-4">
                1. Meet with Aura → 2. Collaborate on design → 3. Approve budget & timeline → 4. We build your project
              </p>
              <p className="text-sm text-green-800">
                ✅ One contract, seamless collaboration, faster timeline, clear accountability, cost savings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Design-Build <span className="text-aura-gold">Project Types</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {projectTypes.map((type, index) => (
            <div
              key={index}
              className="card bg-aura-grey-light hover:bg-aura-gold hover:text-white transition-all text-center"
            >
              <CheckCircle className="w-6 h-6 mx-auto mb-2" />
              <p className="font-medium">{type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Aura for <span className="text-aura-gold">Design-Build?</span>
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Construction Expertise</h3>
              <p className="text-aura-grey-dark">
                Our designers understand construction inside and out—creating beautiful, buildable designs that stay
                on budget.
              </p>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Proven Track Record</h3>
              <p className="text-aura-grey-dark">
                Years of successful design-build projects across residential and commercial sectors.
              </p>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Transparent Pricing</h3>
              <p className="text-aura-grey-dark">
                No surprises. We provide detailed estimates upfront and keep you informed throughout the project.
              </p>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold mb-3 text-aura-gold">Quality Craftsmanship</h3>
              <p className="text-aura-grey-dark">
                We don't just design beautiful spaces—we build them with the highest quality materials and skilled trades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container">
        <div className="card bg-gradient-to-r from-aura-black to-aura-grey-dark text-white text-center p-12">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-aura-gold" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Design & Build Your <span className="text-aura-gold">Dream Project?</span>
          </h2>

          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto mb-8">
            From concept to completion, we bring your vision to life with expert design and quality construction.
            Let's start creating something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start Your Project
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
