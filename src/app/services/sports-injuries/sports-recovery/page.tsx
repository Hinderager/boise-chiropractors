import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sports Recovery Boise | Faster Healing for Athletes | (208) 505-9352',
  description: 'Accelerate your sports recovery in Boise with chiropractic care. Reduce downtime and heal properly. Athletes trust us. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/sports-injuries/sports-recovery' },
}

export default function SportsRecoveryPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sports Recovery in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Recover faster and get back to peak performance.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Smart Recovery Gets You Back Faster</h2>
            <p>If you've been injured or are dealing with pain that's keeping you from training, you want to get back to your sport as quickly as possible. But rushing recovery often backfires. The key is healing properly so you don't end up with chronic problems or repeated injuries.</p>

            <h2>Why Recovery Matters</h2>
            <p>A lot of athletes try to push through pain or return to activity too soon. That's how acute injuries become chronic problems. Proper recovery means not just reducing pain, but restoring full function, strength, and mobility. It means addressing the underlying issues that led to the injury in the first place.</p>

            <h2>Our Recovery Approach</h2>
            <p>We create individualized recovery plans based on your specific injury, your sport, and your goals. This typically includes:</p>
            <ul>
              <li>Chiropractic adjustments to restore proper joint function</li>
              <li>Soft tissue therapy to reduce inflammation and promote healing</li>
              <li>Targeted rehabilitation exercises</li>
              <li>Functional movement assessment and correction</li>
              <li>Gradual return-to-activity protocols</li>
            </ul>

            <h2>The Stages of Recovery</h2>
            <p>Recovery isn't linear, and it's not just about when the pain goes away. We'll guide you through the whole process—from initial injury management and pain reduction, through restoring range of motion and strength, to sport-specific training and finally returning to full activity.</p>

            <h2>Not Just for Injuries</h2>
            <p>Recovery isn't only about healing from injuries. If you're training hard, regular chiropractic care can help your body recover between workouts, reduce soreness, and keep you performing at your best. A lot of serious athletes include chiropractic as part of their regular routine.</p>

            <h2>Working Together</h2>
            <p>We'll work with your coach, trainer, or physical therapist to make sure everyone's on the same page. Coordinated care gives you the best chance of a full recovery. We're not here to replace other providers—we're here to complement them.</p>

            <h2>Real Recovery Stories</h2>
            <p>We've helped marathon runners get back on the trails, high school athletes return to their sports mid-season, weekend warriors overcome chronic pain, and everyday people get back to enjoying their active lifestyles. Whatever your activity level, we're here to support your recovery.</p>

            <h2>Active Recovery in Boise</h2>
            <p>The Boise area offers endless opportunities to stay active. Whether you're hitting the Greenbelt, skiing Bogus Basin, or playing in a local league, we want to help you enjoy it all without being sidelined by pain or injuries.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Recovery Journey</h2>
          <p className="text-gray-200 mb-6">Schedule your appointment today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
