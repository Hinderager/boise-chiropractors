import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instrument-Assisted Adjustments Boise | Gentle Chiropractic | (208) 505-9352',
  description: 'Gentle, precise instrument-assisted chiropractic adjustments in Boise. Low-force techniques for comfortable, effective care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/adjustments/instrument-adjustments' },
}

export default function InstrumentAdjustmentsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Instrument-Assisted Adjustments</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Gentle, controlled chiropractic care using specialized tools.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Are Instrument-Assisted Adjustments?</h2>
            <p>Instead of using hands directly, we use specialized instruments to deliver precise, gentle adjustments to your spine and joints. The most common tool we use is called an Activator—a small, spring-loaded device that delivers a quick, controlled impulse to specific areas.</p>

            <h2>Why Choose This Approach?</h2>
            <p>Some people prefer instrument-assisted adjustments because they're gentler than traditional manual techniques. There's no twisting or popping sounds, which can be reassuring if you're nervous about chiropractic care. The instruments allow us to target very specific areas with precision and consistency.</p>

            <h2>Who Benefits Most?</h2>
            <p>This technique works well for just about anyone, but it's especially good for:</p>
            <ul>
              <li>Older adults who prefer a gentler approach</li>
              <li>People with acute pain or inflammation</li>
              <li>Those recovering from injuries</li>
              <li>Anyone who's anxious about traditional adjustments</li>
              <li>Patients with osteoporosis or other bone conditions</li>
            </ul>

            <h2>How It Feels</h2>
            <p>You'll feel a quick, light tapping sensation. It's not painful at all—most people find it quite comfortable. The instrument delivers just the right amount of force to move the joint without any of the twisting or cracking associated with manual adjustments.</p>

            <h2>What We Treat</h2>
            <p>Instrument-assisted adjustments can help with all the same conditions as traditional adjustments—back pain, neck pain, headaches, joint problems, and more. The difference is in how we deliver the treatment, not what it accomplishes.</p>

            <h2>Research-Backed Results</h2>
            <p>The Activator Method is one of the most researched chiropractic techniques out there. Studies show it's effective for pain relief and improving function. We've seen great results with our Boise patients using this approach.</p>

            <h2>Your First Visit</h2>
            <p>We'll evaluate your condition and determine which areas need attention. Then we'll use the instrument to make precise adjustments. The whole process is quick, comfortable, and effective. Most people are surprised by how gentle it is.</p>

            <h2>Serving the Boise Community</h2>
            <p>Whether you're in downtown Boise, Meridian, Eagle, or anywhere in the valley, we're here to provide gentle, effective care. We work with people of all ages and activity levels.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Try Gentle, Effective Care</h2>
          <p className="text-gray-200 mb-6">Schedule your instrument-assisted adjustment today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
