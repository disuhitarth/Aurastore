import Link from 'next/link'
import { CheckCircle, Shield, Users, Clock, Award, HeadphonesIcon } from 'lucide-react'

export default function GeneralContractingPage() {
  const benefits = [
    {
      icon: Users,
      title: 'One Point of Contact',
      description: 'Manage every aspect of the job through a single, dedicated point of contact.',
    },
    {
      icon: Clock,
      title: 'Professional Project Management',
      description: 'Expert oversight of timelines, budgets, labor, and quality control.',
    },
    {
      icon: Award,
      title: 'Skilled Subcontractors',
      description: 'Access to reliable, experienced professionals for each trade.',
    },
    {
      icon: Shield,
      title: 'Building Codes & Permits',
      description: 'Full compliance with local codes, permits, and inspection requirements.',
    },
    {
      icon: CheckCircle,
      title: 'Cost Efficiency',
      description: 'Better pricing through industry connections and bulk purchasing power.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Quality Assurance',
      description: 'Accountability for every phase with durable, high-quality results.',
    },
  ]

  const protections = [
    'Expert Project Management – We coordinate all trades and keep the project on schedule',
    'Qualified Subcontractors – We hire and supervise skilled professionals for each phase',
    'Quality Workmanship – All work meets building codes, industry standards, and your expectations',
    'Safety & Compliance – Safe job site with all required permits and inspections',
    'Clear Communication – Updates, answers, and information every step of the way',
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-black via-aura-grey-dark to-aura-black text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            General <span className="text-aura-gold">Contracting</span>
          </h1>
          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto">
            Complete management and coordination of construction projects from start to finish
          </p>
        </div>
      </section>

      {/* What is General Contracting */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            What is <span className="text-aura-gold">General Contracting?</span>
          </h2>

          <div className="prose prose-lg max-w-none text-aura-grey-dark">
            <p className="text-lg leading-relaxed mb-6">
              General contracting is the complete management and coordination of a construction project from start to finish.
              As your general contractor, we act as your main point of contact, overseeing every phase of the build to ensure
              the work is completed safely, professionally, and to the highest standards.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our responsibility is to turn your plans and ideas into reality by organizing all labor, materials, equipment,
              and subcontractors needed for the job. We handle scheduling, budgeting, quality control, and on-site supervision
              so your project runs smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* What We Protect */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How We <span className="text-aura-gold">Protect</span> Your Investment
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {protections.map((protection, index) => (
              <div key={index} className="card bg-white flex items-start">
                <CheckCircle className="w-6 h-6 text-aura-gold mr-4 flex-shrink-0 mt-1" />
                <p className="text-aura-grey-dark">{protection}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-lg text-aura-grey-dark">
              Whether it's new construction, renovations, additions, or commercial improvements,
              general contracting provides clients with a seamless process and peace of mind. Our goal
              is to deliver a strong, durable, and beautiful finished product — <span className="font-bold text-aura-gold">on time and on budget</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hire a General Contractor */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why You Should <span className="text-aura-gold">Hire</span> a General Contractor
        </h2>

        <p className="text-lg text-aura-grey-dark text-center max-w-4xl mx-auto mb-12">
          Hiring a general contractor is one of the most important decisions you can make for any construction project.
          Whether you're planning a new build, renovation, or commercial improvement, a general contractor brings the expertise,
          organization, and accountability needed to ensure your project is completed safely, efficiently, and with high-quality results.
        </p>

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

      {/* Pros and Cons (Sarcastic Way) */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            The "Downsides" of Hiring a General Contractor
            <span className="text-aura-gold"> (Spoiler: There Aren't Any)</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white/5 border border-aura-gold">
              <h3 className="text-2xl font-bold mb-4 text-aura-gold">❌ "Cons"</h3>
              <ul className="space-y-3 text-aura-grey-light">
                <li>✓ You don't get to juggle 10 different contractors yourself</li>
                <li>✓ You miss out on permit headaches</li>
                <li>✓ You avoid costly mistakes from unqualified workers</li>
                <li>✓ You don't get to stress about timelines</li>
                <li>✓ You skip the "learning experience" of DIY disasters</li>
              </ul>
            </div>

            <div className="card bg-aura-gold text-aura-black">
              <h3 className="text-2xl font-bold mb-4">✅ Actual Pros</h3>
              <ul className="space-y-3">
                <li>✓ One point of contact for everything</li>
                <li>✓ Professional project management</li>
                <li>✓ Guaranteed quality and compliance</li>
                <li>✓ Better pricing and materials</li>
                <li>✓ Peace of mind from start to finish</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xl text-aura-grey-light mt-12 max-w-3xl mx-auto italic">
            "Hiring a general contractor saves time, reduces stress, and delivers a higher-quality finished product.
            When you choose a professional contractor, you're choosing peace of mind, expert guidance, and a job done right from start to finish."
          </p>
        </div>
      </section>

      {/* How You Save */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          How You <span className="text-aura-gold">Save Money</span> with a General Contractor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card bg-aura-grey-light">
            <h3 className="text-xl font-bold mb-4 text-aura-gold">💰 Direct Cost Savings</h3>
            <ul className="space-y-3 text-aura-grey-dark">
              <li>• Bulk purchasing power for materials</li>
              <li>• Industry connections for better pricing</li>
              <li>• Efficient scheduling reduces labor costs</li>
              <li>• Proper planning prevents expensive changes</li>
            </ul>
          </div>

          <div className="card bg-aura-grey-light">
            <h3 className="text-xl font-bold mb-4 text-aura-gold">🛡️ Avoided Costs</h3>
            <ul className="space-y-3 text-aura-grey-dark">
              <li>• No costly mistakes from DIY attempts</li>
              <li>• Avoid permit violations and fines</li>
              <li>• Prevent delays that increase costs</li>
              <li>• No need to redo poor quality work</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary text-lg">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
