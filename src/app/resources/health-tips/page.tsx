import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Health & Wellness Tips | Boise Chiropractors',
  description: 'Helpful health and wellness tips from Boise Chiropractors. Learn how to improve your posture, reduce pain, and maintain optimal health.',
  alternates: { canonical: 'https://boise-chiropractors.com/resources/health-tips' },
}

export default function HealthTipsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Health & Wellness Tips</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Simple Ways to Improve Your Health</h2>
            
            <h3>Posture Tips for Desk Workers</h3>
            <ul>
              <li>Keep your monitor at eye level to avoid neck strain</li>
              <li>Sit with your feet flat on the floor</li>
              <li>Take a 2-minute standing break every hour</li>
              <li>Keep your shoulders relaxed, not hunched</li>
            </ul>

            <h3>Back Pain Prevention</h3>
            <ul>
              <li>Lift with your legs, not your back</li>
              <li>Maintain a healthy weight</li>
              <li>Stay active with regular exercise</li>
              <li>Sleep on a supportive mattress</li>
            </ul>

            <h3>When to See a Chiropractor</h3>
            <p>Don't wait for pain to become unbearable. See a chiropractor if you experience:</p>
            <ul>
              <li>Persistent back or neck pain</li>
              <li>Headaches that won't go away</li>
              <li>Limited range of motion</li>
              <li>Pain after an accident or injury</li>
              <li>Numbness or tingling in your extremities</li>
            </ul>

            <h3>Daily Stretches for Spine Health</h3>
            <p>Simple stretches can make a big difference. Try these daily:</p>
            <ul>
              <li>Neck rolls (slow and gentle)</li>
              <li>Shoulder shrugs</li>
              <li>Cat-cow stretch</li>
              <li>Child's pose</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions? Call Us</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
