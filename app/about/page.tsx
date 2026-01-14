import Link from 'next/link'
import { Users, Target, TrendingUp, Heart, Award, Shield } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Quality & Integrity',
      description: 'We never compromise on quality or honesty. Every project reflects our commitment to excellence.',
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Your vision and satisfaction drive everything we do. We listen, adapt, and deliver.',
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Our team brings expertise, skill, and professionalism to every aspect of construction.',
    },
    {
      icon: Heart,
      title: 'Passion for Building',
      description: 'We love what we do, and it shows in the quality and care we put into every project.',
    },
  ]

  const timeline = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Founded with a vision to provide honest, quality construction services to the GTA.',
    },
    {
      year: '2015',
      title: 'Rapid Growth',
      description: 'Expanded our team and services, completing over 100 successful projects.',
    },
    {
      year: '2020',
      title: 'Industry Recognition',
      description: 'Earned reputation as one of the most trusted general contractors in the region.',
    },
    {
      year: '2025',
      title: 'Continued Excellence',
      description: 'Over 500 completed projects, serving both commercial and residential sectors across the GTA.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-black via-aura-grey-dark to-aura-black text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-aura-gold">Aura Renovations</span>
          </h1>
          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto">
            Building excellence and delivering dreams since 2010
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Who <span className="text-aura-gold">We Are</span>
          </h2>

          <div className="prose prose-lg max-w-none text-aura-grey-dark">
            <div className="card bg-aura-grey-light">
              <p className="text-lg leading-relaxed mb-6">
                Aura Renovations Inc. is a premier general contracting company serving Brampton and the Greater Toronto Area.
                We specialize in commercial and residential construction, bringing professional expertise, quality craftsmanship,
                and reliable service to every project we undertake.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Also known as <span className="font-bold text-aura-gold">Aura Renos</span> and{' '}
                <span className="font-bold text-aura-gold">House of Aura</span>, we've built our reputation on trust,
                transparency, and exceptional results. Our team of skilled professionals is dedicated to turning your
                construction and renovation dreams into reality.
              </p>

              <p className="text-lg leading-relaxed">
                From concept to completion, we manage every aspect of your project with precision, care, and a commitment
                to exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Started */}
      <section className="bg-aura-grey-light py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How It <span className="text-aura-gold">Started</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="card bg-white">
              <p className="text-lg text-aura-grey-dark leading-relaxed mb-6">
                Aura Renovations was founded with a simple but powerful vision: to provide honest, reliable, and
                high-quality construction services to homeowners and businesses throughout the GTA.
              </p>

              <p className="text-lg text-aura-grey-dark leading-relaxed mb-6">
                Our founder, <span className="font-semibold">Vikas Nain</span>, saw a need in the market for a construction
                company that truly prioritized client satisfaction, transparent communication, and exceptional craftsmanship.
                Starting with small residential projects, we quickly earned a reputation for reliability and quality that
                led to rapid growth.
              </p>

              <p className="text-lg text-aura-grey-dark leading-relaxed">
                Word-of-mouth referrals and repeat clients became the foundation of our success. What began as a small
                operation has grown into a full-service general contracting company serving both residential and commercial
                sectors across the Greater Toronto Area.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="card bg-white hover:shadow-xl transition-all h-full">
                    <div className="text-4xl font-bold text-aura-gold mb-3">{item.year}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-aura-grey-dark">{item.description}</p>
                  </div>

                  {/* Timeline connector */}
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-aura-gold"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It's Going */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          How It's <span className="text-aura-gold">Going</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-aura-grey-light to-white">
            <p className="text-lg text-aura-grey-dark leading-relaxed mb-6">
              Today, Aura Renovations is recognized as one of the leading general contractors in Brampton and the GTA.
              We've completed over <span className="font-bold text-aura-gold">500 successful projects</span>, ranging
              from small residential renovations to large-scale commercial buildouts.
            </p>

            <p className="text-lg text-aura-grey-dark leading-relaxed mb-6">
              Our team has grown to include experienced project managers, skilled tradespeople, and dedicated support
              staff—all committed to delivering exceptional results. We maintain strong relationships with trusted
              subcontractors, suppliers, and industry partners who share our commitment to quality.
            </p>

            <p className="text-lg text-aura-grey-dark leading-relaxed">
              But despite our growth, we've never lost sight of what made us successful: treating every client like
              family, maintaining open communication, and delivering work we're proud to put our name on.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="card bg-aura-gold text-white text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm">Projects Completed</div>
          </div>
          <div className="card bg-aura-gold text-white text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="card bg-aura-gold text-white text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
          <div className="card bg-aura-gold text-white text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm">Support Available</div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-aura-black text-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-aura-gold">Vision</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="card bg-white/10 backdrop-blur-sm border border-aura-gold/30">
              <Target className="w-16 h-16 text-aura-gold mx-auto mb-6" />

              <p className="text-xl text-center text-white leading-relaxed mb-6">
                To be the most trusted and respected general contracting company in the Greater Toronto Area, known for
                our unwavering commitment to quality, integrity, and client satisfaction.
              </p>

              <p className="text-lg text-center text-aura-grey-light leading-relaxed">
                We envision a future where every client chooses Aura Renovations with confidence, knowing they'll receive
                professional service, expert craftsmanship, and a finished project that exceeds their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Drive */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our <span className="text-aura-gold">Drive</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="card bg-aura-grey-light text-center">
            <TrendingUp className="w-16 h-16 text-aura-gold mx-auto mb-6" />

            <p className="text-lg text-aura-grey-dark leading-relaxed mb-6">
              What drives us every day is the opportunity to make a meaningful difference in people's lives through
              construction. Whether we're helping a family create their dream home, supporting a business owner's vision,
              or revitalizing a commercial space, we understand that our work impacts real people in real ways.
            </p>

            <p className="text-lg text-aura-grey-dark leading-relaxed">
              We're driven by the pride we feel when clients are thrilled with their finished project. We're motivated
              by the relationships we build, the trust we earn, and the positive reputation we've established in our
              community. Most of all, we're passionate about building—and we love what we do.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <h3 className="text-3xl font-bold mb-8 text-center">
          Our Core <span className="text-aura-gold">Values</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card hover:shadow-2xl transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-aura-grey-dark">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container mt-12">
        <div className="card bg-gradient-to-r from-aura-gold-dark via-aura-gold to-aura-gold-light text-white text-center p-12">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Aura Renovations difference. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-aura-black hover:bg-aura-grey-dark text-white font-semibold py-3 px-8 rounded-lg transition-all">
              Get in Touch
            </Link>
            <Link href="/services" className="bg-white hover:bg-aura-grey-light text-aura-black font-semibold py-3 px-8 rounded-lg transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
