import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chiropractic Blog | Health & Wellness Tips | Boise Chiropractors',
  description: 'Expert tips, guides, and insights about chiropractic care, pain relief, and wellness in Boise and the Treasure Valley. Real advice from experienced chiropractors.',
  alternates: {
    canonical: 'https://boise-chiropractors.com/blogs',
  },
}

const blogPosts = [
  {
    slug: 'choosing-chiropractor-boise',
    title: 'How to Choose a Chiropractor in Boise',
    excerpt: 'Not all chiropractors are the same. Here is what to look for and what to avoid when choosing your chiropractic care.',
  },
  {
    slug: 'chiropractic-care-costs',
    title: 'Chiropractic Care Costs: How Pricing Actually Works',
    excerpt: 'Wondering what chiropractic adjustments cost in Boise? Here is the straightforward explanation of pricing and insurance.',
  },
  {
    slug: 'signs-you-need-chiropractor',
    title: '7 Signs You Need to See a Chiropractor',
    excerpt: 'Your body is probably warning you. Here are the signs that it is time to see a chiropractor.',
  },
  {
    slug: 'when-to-see-chiropractor',
    title: 'When Should You See a Chiropractor?',
    excerpt: 'Not sure if chiropractic care is right for your condition? Here is how to decide.',
  },
  {
    slug: 'wellness-chiropractic-care',
    title: 'Wellness Chiropractic Care for Long-Term Health',
    excerpt: 'Chiropractic is not just for pain. Here is how regular wellness care keeps you healthy year-round.',
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, guides, and insights about chiropractic care and wellness in the Treasure Valley. Real advice from experienced professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 bg-dark-blue">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-5xl font-bold">Chiropractic</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Feel Better?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and start your journey to better health.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
