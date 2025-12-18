import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Accident Injury Treatment Boise | Same-Day Care | (208) 505-9352',
  description: 'Expert car accident injury treatment in Boise. Same-day appointments, insurance documentation, comprehensive care. Call (208) 505-9352 now.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/auto-accidents/car-accident-injuries' },
}

export default function CarAccidentInjuriesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Car Accident Injury Treatment in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get the care you need after a car accident—same-day appointments available.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Don't Wait to Get Checked Out</h2>
            <p>Even if you feel okay right after a car accident, you should still get evaluated. Many car accident injuries don't show symptoms immediately—sometimes it takes days or even weeks for the pain to set in. By then, the damage has already been done, and recovery can take longer.</p>

            <h2>Common Car Accident Injuries</h2>
            <p>We see a wide range of injuries from car accidents in our Boise practice:</p>
            <ul>
              <li>Whiplash and neck injuries</li>
              <li>Back pain and spinal injuries</li>
              <li>Headaches and concussions</li>
              <li>Shoulder and arm pain</li>
              <li>Hip and leg injuries</li>
              <li>Soft tissue damage</li>
              <li>Joint sprains and strains</li>
            </ul>

            <h2>Why Symptoms Show Up Later</h2>
            <p>Right after an accident, your adrenaline is pumping and your body is in shock. This can mask pain and other symptoms. It's only when things settle down that you start feeling the full extent of your injuries. That's why getting checked out as soon as possible is so important—even if you think you're fine.</p>

            <h2>Our Treatment Approach</h2>
            <p>We'll do a thorough evaluation to document all your injuries and create a comprehensive treatment plan. This usually includes adjustments to restore proper alignment, soft tissue therapy to reduce inflammation, and exercises to support healing and prevent long-term problems.</p>

            <h2>Working With Insurance</h2>
            <p>We understand the insurance process for car accident claims. We'll provide all the necessary documentation and work with your insurance company to make sure you get the care you need. We've worked with hundreds of car accident cases in the Boise area and know exactly what's required.</p>

            <h2>Why Choose Chiropractic Care?</h2>
            <p>Chiropractic care is one of the most effective treatments for car accident injuries. Unlike pain medication that just masks symptoms, we address the underlying damage to help you heal properly. Many of our patients avoid surgery and long-term medication use by getting proper chiropractic treatment early.</p>

            <h2>What to Expect</h2>
            <p>We'll see you as soon as possible—often the same day you call. During your first visit, we'll evaluate your injuries, explain what we found, and start treatment right away. Most people begin feeling relief within the first few visits, though complete recovery can take several weeks or months depending on the severity of your injuries.</p>

            <h2>Protecting Your Rights</h2>
            <p>Getting proper medical care right away also protects your legal rights. If you need to file a claim, having documented treatment from day one strengthens your case. We'll provide all the reports and documentation you need.</p>

            <h2>Serving Boise After Accidents</h2>
            <p>We're here for anyone in Boise, Meridian, Eagle, Nampa, and throughout the Treasure Valley who's been in a car accident. Call us right away—don't wait until the pain gets worse.</p>
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
