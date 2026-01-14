import Link from 'next/link'
import { ClipboardCheck, Calendar, DollarSign, Users, Shield, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react'

export default function ProjectManagementPage() {
  const services = [
    {
      icon: Calendar,
      title: 'Project Planning & Scheduling',
      description: 'We create detailed project plans, timelines, and schedules to keep your construction project organized and moving forward efficiently.',
    },
    {
      icon: DollarSign,
      title: 'Budget Management & Cost Control',
      description: 'Our team monitors expenses, manages material costs, prevents budget overruns, and ensures you receive maximum value without sacrificing quality.',
    },
    {
      icon: Users,
      title: 'Subcontractor & Trade Coordination',
      description: 'We coordinate all subcontractors, suppliers, and trades to ensure proper sequencing, teamwork, and efficiency throughout the project.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance & Inspections',
      description: 'Every stage of construction is reviewed for craftsmanship, safety, accuracy, and compliance with industry standards and building codes.',
    },
    {
      icon: CheckCircle,
      title: 'Permits, Codes & Compliance',
      description: 'We handle building permits, inspections, and ensure the entire project meets local regulations and safety requirements.',
    },
    {
      icon: MessageSquare,
      title: 'Communication & Progress Updates',
      description: 'Clear communication is key. We provide consistent updates so clients always know the status of their project from planning to completion.',
    },
  ]

  const benefits = [
    'Faster project completion',
    'Fewer delays and mistakes',
    'Stronger workflow coordination',
    'Higher quality construction',
    'Better cost efficiency',
    'A stress-free experience for homeowners and businesses',
  ]

  const whyChoose = [
    {
      icon: Users,
      title: 'Professional, Experienced Project Managers',
      description: 'Our team brings years of construction management expertise to every project.',
    },
    {
      icon: Calendar,
      title: 'Detailed Planning & Accurate Timelines',
      description: 'We create realistic schedules and stick to them, keeping your project on track.',
    },
    {
      icon: DollarSign,
      title: 'Strict Budget Control',
      description: 'We manage costs carefully to ensure you get maximum value without overruns.',
    },
    {
      icon: TrendingUp,
      title: 'Fast Problem-Solving',
      description: 'When challenges arise, we respond quickly with effective solutions.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Stay informed throughout the entire project with regular updates and open dialogue.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Work Delivered On Schedule',
      description: 'We combine quality craftsmanship with efficient project management.',
    },
  ]

  const projectTypes = [
    { type: 'Commercial (C)', description: 'Office buildings, retail stores, restaurants, warehouses, and commercial complexes' },
    { type: 'Residential (R)', description: 'New home construction, renovations, additions, and multi-unit residential projects' },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 via-orange-700 to-orange-900 text-white py-20">
        <div className="section-container text-center">
          <ClipboardCheck className="w-20 h-20 mx-auto mb-6 text-aura-gold" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Construction <span className="text-aura-gold">Project Management</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Professional Planning & Coordination for Construction Projects
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Expert <span className="text-aura-gold">Project Management</span> Services
          </h2>

          <div className="text-lg text-aura-grey-dark leading-relaxed space-y-6">
            <p>
              Looking for reliable construction project management services? We provide expert planning, coordination,
              scheduling, and supervision to ensure your project is completed on time, on budget, and with the highest
              level of quality.
            </p>

            <p>
              Our project management team oversees every phase of the job, making your construction process smooth,
              efficient, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Expert Construction <span className="text-aura-gold">Project Management</span> Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card bg-white hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-aura-grey-dark">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Project Management */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What is <span className="text-aura-gold">Project Management?</span>
          </h2>

          <div className="card bg-gradient-to-br from-aura-grey-light to-white">
            <p className="text-lg text-aura-grey-dark leading-relaxed mb-6">
              Project management in construction is the comprehensive oversight of all aspects of a building project.
              It involves coordinating people, materials, equipment, schedules, budgets, and quality control to ensure
              successful project completion.
            </p>

            <p className="text-lg text-aura-grey-dark leading-relaxed">
              A skilled project manager acts as the central hub of communication and decision-making, keeping all stakeholders
              informed and aligned. This ensures that your vision becomes reality—delivered on time, within budget, and to
              the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Hiring Us for Your Project is <span className="text-aura-gold">Important</span>
          </h2>

          <p className="text-xl text-center text-aura-grey-light mb-12 max-w-4xl mx-auto">
            Construction projects involve countless moving parts, multiple trades, strict timelines, and significant investment.
            Without professional project management, even well-planned projects can face delays, cost overruns, quality issues,
            and communication breakdowns.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((item, index) => (
                <div key={index} className="card bg-white/10 backdrop-blur-sm border border-aura-gold/30 hover:bg-white/20 transition-all">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-aura-gold flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-aura-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-aura-gold">{item.title}</h3>
                      <p className="text-aura-grey-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Project Management */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Types of <span className="text-aura-gold">Project Management</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectTypes.map((type, index) => (
            <div key={index} className="card bg-aura-grey-light hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-4 text-aura-gold">{type.type}</h3>
              <p className="text-lg text-aura-grey-dark">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-aura-grey-dark mb-6 max-w-3xl mx-auto">
            Whether you're building a new commercial facility, renovating an existing space, constructing a custom home,
            or managing a large residential development, our project management services ensure success.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Benefits of Professional <span className="text-aura-gold">Project Management</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card bg-white hover:shadow-xl transition-all flex items-start"
              >
                <CheckCircle className="w-6 h-6 text-aura-gold mr-3 flex-shrink-0 mt-1" />
                <p className="text-aura-grey-dark text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container">
        <div className="card bg-gradient-to-r from-aura-black to-aura-grey-dark text-white text-center p-12">
          <h2 className="text-4xl font-bold mb-6">
            Your Trusted Construction <span className="text-aura-gold">Project Management</span> Team
          </h2>

          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto mb-8">
            From residential renovations to large commercial builds, we manage your project with precision and care.
            Our goal is simple: deliver a smooth, efficient construction process and exceptional results you can depend on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start Your Project
            </Link>
            <Link href="/services" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-aura-black">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
