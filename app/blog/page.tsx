import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

export default function BlogPage() {
  // Sample blog posts (will be AI-generated in production)
  const posts = [
    {
      id: 1,
      title: 'Top 10 Kitchen Renovation Trends for 2025',
      excerpt: 'Discover the latest kitchen design trends that are transforming homes across the GTA. From smart appliances to sustainable materials...',
      author: 'Aura Team',
      date: '2025-01-10',
      category: 'Residential',
      image: '/images/blog/kitchen-trends.jpg',
    },
    {
      id: 2,
      title: 'How to Choose the Right General Contractor',
      excerpt: 'Selecting a general contractor is one of the most important decisions for your construction project. Here\'s what you need to know...',
      author: 'Vikas Nain',
      date: '2025-01-08',
      category: 'Tips & Guides',
      image: '/images/blog/choosing-contractor.jpg',
    },
    {
      id: 3,
      title: 'Commercial Renovation: Minimizing Business Disruption',
      excerpt: 'Learn how to plan and execute commercial renovations that keep your business running smoothly during construction...',
      author: 'Aura Team',
      date: '2025-01-05',
      category: 'Commercial',
      image: '/images/blog/commercial-reno.jpg',
    },
    {
      id: 4,
      title: 'The ROI of Home Renovations: Which Projects Pay Off?',
      excerpt: 'Not all home improvements offer the same return on investment. Find out which renovations add the most value to your property...',
      author: 'Aura Team',
      date: '2025-01-03',
      category: 'Residential',
      image: '/images/blog/roi-renovations.jpg',
    },
    {
      id: 5,
      title: 'Building Code Updates: What Contractors Need to Know',
      excerpt: 'Stay informed about the latest building code changes in Ontario and how they affect your construction project...',
      author: 'Vikas Nain',
      date: '2024-12-28',
      category: 'Industry News',
      image: '/images/blog/building-codes.jpg',
    },
    {
      id: 6,
      title: 'Basement Finishing 101: Transform Your Underground Space',
      excerpt: 'A comprehensive guide to finishing your basement, from waterproofing to design ideas that maximize your living space...',
      author: 'Aura Team',
      date: '2024-12-25',
      category: 'Residential',
      image: '/images/blog/basement-finishing.jpg',
    },
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Tips & Guides', 'Industry News']

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-black via-aura-grey-dark to-aura-black text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Aura <span className="text-aura-gold">Blog</span>
          </h1>
          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto">
            Expert insights, renovation tips, and industry updates from the Aura Renovations team
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-container">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-aura-gold text-aura-gold hover:bg-aura-gold hover:text-white transition-all font-semibold"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="card bg-gradient-to-br from-aura-grey-light to-white mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-80 bg-gradient-to-br from-aura-grey to-aura-grey-dark rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">Featured Post Image</span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-aura-gold text-white text-sm font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-sm text-aura-grey-dark flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {posts[0].category}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4 hover:text-aura-gold transition-colors cursor-pointer">
                {posts[0].title}
              </h2>

              <p className="text-aura-grey-dark text-lg mb-6">
                {posts[0].excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-aura-grey-dark mb-6">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {posts[0].author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {posts[0].date}
                </span>
              </div>

              <Link href={`/blog/${posts[0].id}`} className="btn-primary inline-flex items-center w-fit">
                Read More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="card group hover:shadow-2xl transition-all h-full cursor-pointer">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-aura-grey-light to-aura-grey rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-aura-grey-dark">Post Image</span>
                </div>

                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-aura-gold/20 text-aura-gold text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-aura-gold transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-aura-grey-dark mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-aura-grey-dark border-t border-aura-grey pt-4">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* AI Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-aura-grey-light rounded-lg p-6 max-w-2xl">
            <p className="text-aura-grey-dark">
              <span className="font-semibold text-aura-gold">Note:</span> Our blog features AI-generated content
              providing valuable insights into construction, renovation, and project management. Content is reviewed
              by our expert team to ensure accuracy and relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-aura-black text-white py-20 mt-12">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay <span className="text-aura-gold">Updated</span>
          </h2>

          <p className="text-xl text-aura-grey-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest renovation tips, industry insights, and project inspiration
          </p>

          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-aura-gold"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
