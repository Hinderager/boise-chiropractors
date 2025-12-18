import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manual Chiropractic Adjustments Boise | Hands-On Care | (208) 505-9352',
  description: 'Traditional hands-on chiropractic adjustments in Boise. Precise, effective manual techniques for pain relief. Schedule today at (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/adjustments/manual-adjustments' },
}

export default function ManualAdjustmentsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Manual Chiropractic Adjustments</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Traditional hands-on techniques for effective, precise care.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Are Manual Adjustments?</h2>
            <p>Manual adjustments are the classic, hands-on approach to chiropractic care. We use our hands to apply controlled force to specific joints in your spine or elsewhere in your body. It's the technique most people picture when they think about going to a chiropractor.</p>

            <h2>How It Works</h2>
            <p>We'll position you comfortably—usually on a specialized table—and then apply a quick, precise thrust to the joint that needs adjusting. You might hear a popping or cracking sound. That's just gas bubbles releasing from the joint fluid. It's the same thing that happens when you crack your knuckles, except we're doing it in a controlled, therapeutic way.</p>

            <h2>Why Choose Manual Adjustments?</h2>
            <p>Manual adjustments have been used for over a century because they work. They're especially effective for restoring movement to joints that have become stiff or misaligned. A lot of our Boise patients prefer this traditional approach because they can feel the immediate difference.</p>

            <h2>What We Treat</h2>
            <ul>
              <li>Back pain and stiffness</li>
              <li>Neck pain and tension</li>
              <li>Joint restrictions</li>
              <li>Headaches and migraines</li>
              <li>Sports-related injuries</li>
              <li>General mobility issues</li>
            </ul>

            <h2>Is It Safe?</h2>
            <p>When performed by a trained professional, manual adjustments are very safe. We'll always assess your condition first and make sure this technique is appropriate for you. If you have concerns about the popping sound or the technique itself, just let us know. We're happy to explain exactly what we're doing and why.</p>

            <h2>What to Expect After</h2>
            <p>Most people feel immediate relief after a manual adjustment. You might feel a little sore afterward—kind of like after a good workout—but that usually goes away within a day or two. Drinking plenty of water and moving around gently can help.</p>

            <h2>Helping Boise Feel Better</h2>
            <p>We've helped countless people in Boise, Meridian, Eagle, and throughout the Treasure Valley get back to doing what they love. Whether you're dealing with chronic pain or just want to maintain your health, we're here to help.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Experience the Benefits of Manual Adjustments</h2>
          <p className="text-gray-200 mb-6">Schedule your appointment today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
