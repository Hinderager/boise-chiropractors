import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chiropractic Adjustments | Spinal Manipulation | Boise Chiropractors',
  description: 'Professional chiropractic adjustments in Boise. Spinal manipulation, manual adjustments, and instrument-assisted techniques. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/adjustments' },
}

export default function AdjustmentsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Chiropractic Adjustments</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Expert spinal adjustments to restore proper alignment and function.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Are Chiropractic Adjustments?</h2>
            <p>Chiropractic adjustments, also called spinal manipulation, are precise movements applied to joints that have restricted movement. These techniques help restore proper alignment, reduce pain, and improve your body's overall function.</p>
            
            <h2>Types of Adjustments We Offer</h2>
            <ul>
              <li><strong>Manual Adjustments:</strong> Traditional hands-on techniques for precise spinal correction</li>
              <li><strong>Instrument-Assisted:</strong> Gentle, controlled adjustments using specialized tools</li>
              <li><strong>Drop Table Technique:</strong> Low-force method using specialized tables</li>
              <li><strong>Activator Method:</strong> Gentle, spring-loaded instrument adjustments</li>
            </ul>

            <h2>Benefits of Regular Adjustments</h2>
            <p>Regular chiropractic care can help with pain relief, improved mobility, better posture, enhanced athletic performance, and overall wellness. Many patients report feeling immediate relief after their first adjustment.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Schedule Your Adjustment</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
