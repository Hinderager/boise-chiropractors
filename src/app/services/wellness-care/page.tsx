import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wellness Care | Preventive Chiropractic | Boise Chiropractors',
  description: 'Preventive chiropractic wellness care in Boise. Posture correction, maintenance care, and overall health optimization. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/wellness-care' },
}

export default function WellnessCare() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wellness & Preventive Care</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Feel your best every day with ongoing chiropractic wellness care.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Proactive Care for Optimal Health</h2>
            <p>Chiropractic isn't just for pain relief. Regular wellness care helps you maintain optimal health, prevent injuries, and feel your best at every age. Think of it like going to the dentist - prevention is easier than treatment.</p>
            
            <h2>Wellness Care Services</h2>
            <ul>
              <li><strong>Preventive Adjustments:</strong> Regular care to maintain proper alignment</li>
              <li><strong>Posture Correction:</strong> Address the modern epidemic of poor posture</li>
              <li><strong>Maintenance Care:</strong> Keep your body functioning at its best</li>
              <li><strong>Stress Relief:</strong> Reduce the physical effects of daily stress</li>
              <li><strong>Mobility Enhancement:</strong> Stay flexible and active as you age</li>
            </ul>

            <h2>Who Benefits From Wellness Care?</h2>
            <p>Everyone can benefit from regular chiropractic care. Whether you sit at a desk all day, work physically demanding jobs, or just want to stay active and healthy, wellness care helps you feel better and function better.</p>

            <h2>Create Your Wellness Plan</h2>
            <p>We'll work with you to create a personalized wellness plan that fits your lifestyle and goals. Some patients come in weekly, others monthly. We'll find what works best for you.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Wellness Journey</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
