import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lower Back Pain Treatment Boise | Chiropractor | (208) 505-9352',
  description: 'Effective lower back pain relief in Boise. Expert chiropractic care for chronic and acute back pain. Same-day appointments. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/back-pain/lower-back-pain' },
}

export default function LowerBackPainPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Lower Back Pain Treatment in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get relief from chronic or acute lower back pain with expert chiropractic care.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>You're Not Alone</h2>
            <p>Lower back pain is one of the most common reasons people come to see us. Whether it's from sitting too much, lifting heavy things, an old injury, or just waking up with it one day—we get it. And we can help.</p>

            <h2>Why Does Lower Back Pain Happen?</h2>
            <p>Your lower back does a lot of work. It supports your upper body, lets you bend and twist, and handles stress all day long. When things go wrong—maybe a joint gets stuck, a muscle tightens up, or your posture throws things out of whack—pain follows.</p>

            <p>Common causes we see in our Boise practice include:</p>
            <ul>
              <li>Sitting at a desk all day</li>
              <li>Lifting incorrectly</li>
              <li>Old injuries that never quite healed right</li>
              <li>Weak core muscles</li>
              <li>Herniated or bulging discs</li>
              <li>Arthritis and degenerative changes</li>
              <li>Pregnancy</li>
            </ul>

            <h2>How We Help</h2>
            <p>We start by figuring out what's actually causing your pain. Then we create a treatment plan tailored to your specific situation. This usually includes spinal adjustments to restore proper movement, along with stretches and exercises you can do at home.</p>

            <h2>What to Expect</h2>
            <p>Most people notice some relief after their first visit. For chronic pain, it might take a few sessions to get lasting results. We'll be straight with you about what to expect and how long treatment might take.</p>

            <h2>Beyond Adjustments</h2>
            <p>We'll also talk about things you can do to prevent the pain from coming back—like improving your posture, strengthening your core, and adjusting your workspace. The goal isn't just to feel better today, but to stay pain-free long-term.</p>

            <h2>When to Call</h2>
            <p>If your lower back pain is keeping you from doing things you enjoy, making it hard to work, or just won't go away, give us a call. You don't have to live with it. We've helped thousands of people in Boise and the surrounding areas get back to their lives pain-free.</p>

            <h2>Serving the Treasure Valley</h2>
            <p>We're here for everyone in Boise, Meridian, Eagle, Nampa, and throughout the valley. Whether you're dealing with a sudden injury or years of chronic pain, we're ready to help.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Feel Better?</h2>
          <p className="text-gray-200 mb-6">Call today to schedule your lower back pain consultation.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
