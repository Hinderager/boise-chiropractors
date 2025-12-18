import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spinal Adjustments Boise | Professional Spine Care | (208) 505-9352',
  description: 'Expert spinal adjustments in Boise. Restore proper alignment, reduce pain, and improve mobility. Same-day appointments available. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/adjustments/spinal-adjustments' },
}

export default function SpinalAdjustmentsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Spinal Adjustments in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional spinal care to restore alignment and help you feel your best.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What's a Spinal Adjustment?</h2>
            <p>A spinal adjustment is a controlled, precise movement applied to your spine to restore proper alignment. When your vertebrae aren't moving correctly, it can cause pain, stiffness, and even affect your nervous system. We use specific techniques to get things moving the way they should.</p>

            <h2>Why Get Your Spine Adjusted?</h2>
            <p>If you're dealing with back pain, neck tension, headaches, or just feel like something's "off" in your body, spinal adjustments might help. We see a lot of folks in Boise who sit at desks all day, lift heavy things for work, or just want to maintain their health. A well-aligned spine can make a real difference in how you feel day-to-day.</p>

            <h2>What to Expect</h2>
            <p>We'll start with a thorough assessment to figure out what's going on with your spine. Then we'll use hands-on techniques to make precise adjustments where needed. Some people hear a popping sound—that's totally normal. It's just gas releasing from the joint, kind of like cracking your knuckles.</p>

            <p>Most patients feel relief pretty quickly, though some need a few sessions to get the full benefit. We'll work with you to create a plan that makes sense for your specific situation.</p>

            <h2>Benefits You Might Notice</h2>
            <ul>
              <li>Less pain and stiffness in your back and neck</li>
              <li>Better range of motion</li>
              <li>Fewer headaches</li>
              <li>Improved posture</li>
              <li>Better sleep</li>
              <li>More energy throughout the day</li>
            </ul>

            <h2>Serving Boise and Surrounding Areas</h2>
            <p>We're here to help people throughout the Boise area—whether you're in downtown Boise, Meridian, Eagle, or anywhere in the Treasure Valley. Getting your spine adjusted regularly can help you stay active and pain-free.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Feel Better?</h2>
          <p className="text-gray-200 mb-6">Call us today to schedule your spinal adjustment.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
