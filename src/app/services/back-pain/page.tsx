import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Back Pain Treatment | Lower & Upper Back Relief | Boise Chiropractors',
  description: 'Expert back pain treatment in Boise. Relief for lower back pain, upper back pain, sciatica, and chronic conditions. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/back-pain' },
}

export default function BackPainPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Back Pain Treatment</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Stop living with back pain. We treat the root cause, not just the symptoms.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>We Treat All Types of Back Pain</h2>
            <p>Back pain doesn't have to be part of your life. Whether you're dealing with a recent injury or chronic pain that's lasted for years, chiropractic care can help you find relief without drugs or surgery.</p>
            
            <h2>Common Back Conditions We Treat</h2>
            <ul>
              <li><strong>Lower Back Pain:</strong> Herniated discs, muscle strains, and degenerative conditions</li>
              <li><strong>Upper Back Pain:</strong> Posture-related pain, thoracic spine issues</li>
              <li><strong>Sciatica:</strong> Nerve pain radiating down the leg</li>
              <li><strong>Chronic Back Pain:</strong> Long-term pain from previous injuries or conditions</li>
            </ul>

            <h2>How Chiropractic Helps Back Pain</h2>
            <p>Through targeted spinal adjustments, we restore proper alignment and reduce pressure on nerves. This approach addresses the underlying cause of your pain, not just the symptoms. Most patients see improvement within the first few visits.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Relief From Back Pain</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
