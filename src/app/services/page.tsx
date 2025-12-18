import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chiropractic Services | Pain Relief & Wellness | Boise Chiropractors',
  description: 'Complete chiropractic care in the Treasure Valley. Adjustments, pain relief, sports injuries, auto accidents, and wellness care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services' },
}

const categories = [
  { name: 'Chiropractic Adjustments', slug: 'adjustments', description: 'Precise spinal adjustments using manual, instrument, and specialized techniques to restore proper alignment and nervous system function.' },
  { name: 'Back Pain Treatment', slug: 'back-pain', description: 'Expert treatment for lower back pain, upper back pain, sciatica, and chronic back conditions. Get relief from pain that is holding you back.' },
  { name: 'Neck Pain & Headaches', slug: 'neck-pain', description: 'Effective treatment for neck pain, whiplash, tension headaches, and migraines. Address the root cause, not just the symptoms.' },
  { name: 'Sports Injuries', slug: 'sports-injuries', description: 'Sports injury treatment and athletic performance care. Get back in the game with specialized chiropractic care for athletes.' },
  { name: 'Auto Accident Recovery', slug: 'auto-accidents', description: 'Comprehensive care for auto accident injuries including whiplash, back pain, and soft tissue damage. We work with insurance.' },
  { name: 'Wellness Care', slug: 'wellness-care', description: 'Preventive chiropractic care, posture correction, and maintenance treatments to keep you feeling your best every day.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Chiropractic Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete chiropractic care for pain relief, injury recovery, and optimal health in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{cat.name}</h2>
                <p className="text-gray-600 mb-4">{cat.description}</p>
                <span className="inline-flex items-center text-dark-blue font-semibold">View Services <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Feel Better?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
