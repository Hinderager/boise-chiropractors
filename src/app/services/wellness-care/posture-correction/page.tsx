import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Posture Correction Boise | Fix Forward Head & Rounded Shoulders | (208) 505-9352',
  description: 'Professional posture correction in Boise. Fix forward head posture, rounded shoulders, and tech neck. Expert chiropractic care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/wellness-care/posture-correction' },
}

export default function PostureCorrectionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Posture Correction in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fix poor posture and prevent the pain it causes.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Your Posture Is Probably Worse Than You Think</h2>
            <p>If you spend time looking at screens—whether it's a computer, phone, or tablet—your posture has probably suffered. Forward head position, rounded shoulders, slouching... these things become so normal that you don't even notice them anymore. But your body notices, and eventually it starts complaining.</p>

            <h2>Why Bad Posture Hurts</h2>
            <p>Your head weighs about 10-12 pounds. When it's properly positioned over your shoulders, your neck and upper back can support it easily. But for every inch your head moves forward, it effectively becomes much heavier. At just 3 inches forward, your head feels like it weighs 30+ pounds. That's a lot of extra strain on your neck and shoulders.</p>

            <p>Add in rounded shoulders and a hunched back, and you've got a recipe for pain, tension, and long-term problems.</p>

            <h2>Common Posture Problems</h2>
            <ul>
              <li><strong>Forward Head Posture:</strong> Your head jutting forward instead of being aligned over your shoulders</li>
              <li><strong>Rounded Shoulders:</strong> Shoulders rolling forward, making you look hunched</li>
              <li><strong>Text Neck:</strong> Neck pain from constantly looking down at your phone</li>
              <li><strong>Slouched Sitting:</strong> Sitting with a curved lower back instead of maintaining the natural curve</li>
              <li><strong>Uneven Shoulders or Hips:</strong> One side higher than the other, often from carrying bags or favoring one side</li>
            </ul>

            <h2>What Poor Posture Causes</h2>
            <p>Bad posture doesn't just make you look slouchy—it causes real problems:</p>
            <ul>
              <li>Chronic neck and shoulder pain</li>
              <li>Tension headaches</li>
              <li>Upper and lower back pain</li>
              <li>Reduced lung capacity (slouching compresses your lungs)</li>
              <li>Fatigue (your muscles work harder to hold you up)</li>
              <li>Joint degeneration over time</li>
            </ul>

            <h2>How We Fix It</h2>
            <p>Posture correction isn't just about being told to "sit up straight." Your body has adapted to poor posture—some muscles are too tight, others are too weak, and your joints may not be moving properly. We need to address all of it.</p>

            <p>Our approach includes:</p>
            <ul>
              <li>Chiropractic adjustments to restore proper joint movement</li>
              <li>Stretches for tight muscles (especially chest and neck)</li>
              <li>Strengthening exercises for weak muscles (especially upper back and deep neck flexors)</li>
              <li>Ergonomic guidance for your workspace</li>
              <li>Postural awareness training</li>
            </ul>

            <h2>It Takes Time</h2>
            <p>You didn't develop poor posture overnight, and you won't fix it overnight either. It takes consistent work—adjustments, exercises, and mindfulness about how you hold yourself throughout the day. Most people start seeing and feeling improvements within a few weeks, but lasting change takes a few months.</p>

            <h2>Your Workspace Matters</h2>
            <p>We'll help you set up your workspace properly—monitor at eye level, chair at the right height, keyboard positioned correctly. Small adjustments to your environment can make a huge difference in your posture throughout the day.</p>

            <h2>Tech Neck Is Real</h2>
            <p>If you're constantly looking down at your phone, you're putting massive stress on your neck. We see this all the time in Boise—people in their 20s and 30s with neck problems that used to only show up in people decades older. The good news is that with proper treatment and better habits, it's fixable.</p>

            <h2>Better Posture, Better Life</h2>
            <p>When your posture improves, everything gets better—less pain, more energy, better breathing, and you even look more confident. It's worth the effort.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Fix Your Posture Today</h2>
          <p className="text-gray-200 mb-6">Schedule your posture evaluation and correction plan.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
