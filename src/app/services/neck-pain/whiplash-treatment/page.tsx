import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Whiplash Treatment Boise | Car Accident Injury Care | (208) 505-9352',
  description: 'Expert whiplash treatment in Boise. Recover from car accident injuries with specialized chiropractic care. Call (208) 505-9352 for same-day appointments.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/neck-pain/whiplash-treatment' },
}

export default function WhiplashTreatmentPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Whiplash Treatment in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Specialized care for car accident injuries and whiplash recovery.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Is Whiplash?</h2>
            <p>Whiplash happens when your head gets jerked forward and backward suddenly—usually in a car accident. Even if the accident seemed minor, the force can cause real damage to the soft tissues in your neck. You might not feel it right away, but within a day or two, the pain and stiffness set in.</p>

            <h2>Common Symptoms</h2>
            <p>Whiplash can show up in different ways:</p>
            <ul>
              <li>Neck pain and stiffness</li>
              <li>Headaches (often starting at the base of the skull)</li>
              <li>Shoulder and upper back pain</li>
              <li>Dizziness or vertigo</li>
              <li>Numbness or tingling in the arms</li>
              <li>Difficulty concentrating or remembering things</li>
              <li>Fatigue</li>
            </ul>

            <h2>Why You Shouldn't Wait</h2>
            <p>A lot of people think they're fine after a car accident because they don't feel hurt right away. But whiplash symptoms often don't show up for 24-48 hours or even longer. The sooner you get treatment, the better your chances of a full recovery. Untreated whiplash can lead to chronic pain and long-term problems.</p>

            <h2>How We Treat Whiplash</h2>
            <p>Our approach focuses on reducing inflammation, restoring proper movement to your neck, and helping the soft tissues heal correctly. This usually includes gentle adjustments, soft tissue work, and exercises to rebuild strength and stability.</p>

            <p>We'll also coordinate with your insurance company and provide documentation for any claims. We've worked with countless car accident cases in Boise and know the process inside and out.</p>

            <h2>What to Expect</h2>
            <p>Recovery time varies depending on the severity of your injury. Some people feel better in a few weeks, while more serious cases can take several months. We'll monitor your progress and adjust your treatment plan as needed.</p>

            <h2>Can Chiropractic Care Really Help?</h2>
            <p>Yes. Research shows that chiropractic care is one of the most effective treatments for whiplash. It helps restore normal movement, reduces pain, and can prevent long-term complications. We've helped hundreds of people in Boise recover from whiplash injuries.</p>

            <h2>After a Car Accident</h2>
            <p>If you've been in a car accident—even if you feel okay—it's worth getting checked out. We offer same-day appointments for accident injuries. The sooner we can evaluate you and start treatment, the better your recovery will be.</p>

            <h2>Serving Boise and Beyond</h2>
            <p>We're here for anyone in Boise, Meridian, Eagle, Nampa, and throughout the Treasure Valley who's dealing with whiplash or other car accident injuries.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Treatment After Your Accident</h2>
          <p className="text-gray-200 mb-6">Same-day appointments available. Call now.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
