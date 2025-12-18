import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Whiplash Recovery Boise | Car Accident Neck Injury Care | (208) 505-9352',
  description: 'Complete whiplash recovery care in Boise. Expert treatment for neck injuries after car accidents. Fast appointments. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/auto-accidents/whiplash-recovery' },
}

export default function WhiplashRecoveryPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Whiplash Recovery in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Comprehensive care for full recovery from whiplash injuries.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Whiplash</h2>
            <p>Whiplash is one of the most common injuries from car accidents. It happens when your head is suddenly jerked forward and backward, causing damage to the muscles, ligaments, and joints in your neck. Even "minor" fender-benders can cause significant whiplash injuries.</p>

            <h2>How Whiplash Develops</h2>
            <p>During a rear-end collision, your body is restrained by the seatbelt, but your head whips forward and then snaps back. This rapid movement can stretch and tear soft tissues, strain muscles, and damage joints in your neck and upper back. Sometimes the force is strong enough to cause disc injuries or nerve damage.</p>

            <h2>Common Symptoms</h2>
            <p>Whiplash symptoms don't always show up right away. You might feel fine immediately after the accident, only to wake up the next morning in severe pain. Common symptoms include:</p>
            <ul>
              <li>Neck pain and stiffness</li>
              <li>Reduced range of motion</li>
              <li>Headaches (especially at the base of the skull)</li>
              <li>Shoulder and upper back pain</li>
              <li>Dizziness or vertigo</li>
              <li>Numbness or tingling in the arms</li>
              <li>Difficulty concentrating</li>
              <li>Fatigue and irritability</li>
            </ul>

            <h2>Why Professional Care Matters</h2>
            <p>A lot of people try to "tough it out" and wait for whiplash to heal on its own. That's a mistake. Without proper treatment, whiplash can lead to chronic pain, reduced mobility, and long-term complications. The sooner you start treatment, the better your chances of a complete recovery.</p>

            <h2>Our Recovery Process</h2>
            <p>We use a phased approach to whiplash recovery:</p>

            <h3>Phase 1: Pain Relief and Stabilization</h3>
            <p>In the first phase, we focus on reducing pain and inflammation while supporting the healing process. Treatment is gentle and aimed at preventing further damage.</p>

            <h3>Phase 2: Restoring Function</h3>
            <p>As healing progresses, we work on restoring normal movement to your neck and upper back. This includes adjustments, mobilization, and targeted exercises.</p>

            <h3>Phase 3: Strengthening and Prevention</h3>
            <p>In the final phase, we focus on rebuilding strength and stability to prevent future problems. We'll give you exercises and strategies to maintain your recovery long-term.</p>

            <h2>How Long Does Recovery Take?</h2>
            <p>It varies. Mild cases might resolve in a few weeks, while more severe whiplash can take several months to fully heal. The key is consistent treatment and following your recovery plan. We'll monitor your progress and adjust treatment as needed.</p>

            <h2>Documentation and Insurance</h2>
            <p>We'll provide complete documentation of your whiplash injury and treatment for your insurance claim. We've worked with countless car accident cases in Boise and understand what's needed for claims and settlements.</p>

            <h2>Don't Delay Treatment</h2>
            <p>If you've been in a car accident, don't wait to see if the pain goes away. Call us right away. Early intervention dramatically improves your chances of full recovery and can prevent chronic problems down the road.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Whiplash Recovery Today</h2>
          <p className="text-gray-200 mb-6">Call for immediate care after your accident.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
