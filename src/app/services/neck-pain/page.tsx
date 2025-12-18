import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neck Pain & Headache Relief | Whiplash Treatment | Boise Chiropractors',
  description: 'Effective neck pain and headache treatment in Boise. Relief for whiplash, tension headaches, and migraines. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/neck-pain' },
}

export default function NeckPainPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Neck Pain & Headache Relief</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Find lasting relief from neck pain and headaches without medication.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Comprehensive Neck Pain Treatment</h2>
            <p>Neck pain and headaches often go hand in hand. Poor posture, injuries, and stress can all contribute to chronic neck pain and recurring headaches. Our chiropractic approach addresses the source of your pain for long-term relief.</p>
            
            <h2>Conditions We Successfully Treat</h2>
            <ul>
              <li><strong>Whiplash:</strong> Auto accident and injury-related neck trauma</li>
              <li><strong>Tension Headaches:</strong> Muscle tension causing chronic headaches</li>
              <li><strong>Migraines:</strong> Severe headaches with additional symptoms</li>
              <li><strong>Cervical Pain:</strong> General neck stiffness and discomfort</li>
              <li><strong>Tech Neck:</strong> Modern posture-related neck issues</li>
            </ul>

            <h2>What to Expect</h2>
            <p>We'll start with a thorough examination to identify what's causing your pain. Then we'll create a personalized treatment plan using gentle adjustments, targeted therapies, and exercises you can do at home. Many patients notice improvement right away.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Stop Neck Pain & Headaches</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
