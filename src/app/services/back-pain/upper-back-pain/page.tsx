import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upper Back Pain Relief Boise | Shoulder & Back Treatment | (208) 505-9352',
  description: 'Expert treatment for upper back and shoulder pain in Boise. Relieve tension, improve posture, and feel better. Call (208) 505-9352 today.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/back-pain/upper-back-pain' },
}

export default function UpperBackPainPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Upper Back Pain Treatment in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Find relief from upper back and shoulder blade pain.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>That Nagging Pain Between Your Shoulder Blades</h2>
            <p>Upper back pain is different from lower back pain. It often shows up as tightness, burning, or aching between your shoulder blades. Maybe it gets worse as the day goes on, or you feel it most when you're hunched over your computer or phone.</p>

            <h2>Common Causes</h2>
            <p>Most upper back pain we see in Boise comes from modern life—too much sitting, poor posture, and stress. Your upper back and shoulders hold a lot of tension, especially if you work at a desk or spend time looking down at screens.</p>

            <p>Other causes include:</p>
            <ul>
              <li>Poor posture (rounded shoulders, forward head position)</li>
              <li>Weak upper back muscles</li>
              <li>Stress and tension</li>
              <li>Previous injuries</li>
              <li>Repetitive movements</li>
              <li>Sleeping in awkward positions</li>
            </ul>

            <h2>How Chiropractic Care Helps</h2>
            <p>We'll work on the joints in your upper back and shoulders to restore proper movement. When these joints aren't moving right, the muscles around them have to work harder, which leads to pain and tension. Adjustments help everything move the way it should.</p>

            <p>We'll also look at your posture and give you specific exercises to strengthen weak areas. A lot of upper back pain comes from muscle imbalances—some muscles are too tight, others are too weak. We need to address both.</p>

            <h2>What You Can Do</h2>
            <p>Between visits, there's plenty you can do to help. Take breaks from sitting, adjust your workspace so you're not hunching forward, and do the stretches we recommend. Small changes add up.</p>

            <h2>Relief That Lasts</h2>
            <p>Most people feel some relief right away, but lasting results take a bit longer. We're not just trying to make you feel better for a day or two—we want to fix the underlying problem so the pain doesn't keep coming back.</p>

            <h2>Who We Help</h2>
            <p>We see a lot of office workers, students, healthcare workers, and anyone who spends time hunched over. If you're in Boise, Meridian, Eagle, or anywhere in the Treasure Valley and dealing with upper back pain, we can help.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Relief from Upper Back Pain</h2>
          <p className="text-gray-200 mb-6">Schedule your appointment today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
