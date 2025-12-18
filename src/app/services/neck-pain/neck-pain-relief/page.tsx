import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neck Pain Relief Boise | Chiropractor for Stiff Neck | (208) 505-9352',
  description: 'Effective neck pain relief in Boise. Treat stiffness, tension, and chronic neck pain with expert chiropractic care. Call (208) 505-9352 today.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/neck-pain/neck-pain-relief' },
}

export default function NeckPainReliefPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Neck Pain Relief in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get lasting relief from neck stiffness, tension, and chronic pain.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Neck Pain Is More Than Just Annoying</h2>
            <p>When your neck hurts, everything feels harder. Turning your head to check your blind spot, looking down at your phone, sleeping comfortably—it all becomes a challenge. And if you've been dealing with it for a while, you know it can really affect your quality of life.</p>

            <h2>What Causes Neck Pain?</h2>
            <p>Your neck has a tough job. It supports your head (which weighs about 10-12 pounds) and lets you move it in all directions. When something goes wrong—maybe poor posture, an injury, or just wear and tear—pain follows.</p>

            <p>Common causes we see in our Boise practice:</p>
            <ul>
              <li>Poor posture from looking at screens all day</li>
              <li>Sleeping in awkward positions</li>
              <li>Stress and tension (your shoulders and neck hold a lot of it)</li>
              <li>Previous injuries like whiplash</li>
              <li>Arthritis and degenerative changes</li>
              <li>Muscle strains from sudden movements</li>
            </ul>

            <h2>How Chiropractic Care Helps</h2>
            <p>We focus on restoring proper movement to the joints in your neck. When these joints aren't moving right, the muscles around them get tight and painful. Adjustments help everything move smoothly again, which reduces pain and tension.</p>

            <p>We'll also work with you on improving your posture and give you exercises to strengthen weak muscles. A lot of neck pain comes from muscle imbalances and poor ergonomics, so addressing those is key to long-term relief.</p>

            <h2>What to Expect</h2>
            <p>We'll start by figuring out exactly what's causing your neck pain. Then we'll create a treatment plan tailored to you. Most people feel some relief after their first adjustment, though it might take a few visits to get lasting results—especially if you've been dealing with pain for a while.</p>

            <h2>Beyond the Adjustment</h2>
            <p>Between visits, we'll give you things to work on at home—stretches, posture tips, ergonomic adjustments. Small changes can make a big difference. Maybe it's adjusting your monitor height, taking breaks from your phone, or sleeping with better pillow support.</p>

            <h2>When to Call</h2>
            <p>If your neck pain is limiting what you can do, affecting your work or sleep, or just won't go away, give us a call. You don't need to keep living with it. We've helped thousands of people in Boise and the surrounding areas get back to feeling normal.</p>

            <h2>Serving the Treasure Valley</h2>
            <p>Whether you're in Boise, Meridian, Eagle, Nampa, or anywhere in the valley, we're here to help. Same-day appointments are often available.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Relief from Neck Pain</h2>
          <p className="text-gray-200 mb-6">Schedule your appointment today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
