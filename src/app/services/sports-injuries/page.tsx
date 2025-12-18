import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sports Injury Treatment | Athletic Performance Care | Boise Chiropractors',
  description: 'Sports injury treatment and athletic performance care in Boise. Get back in the game faster. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/sports-injuries' },
}

export default function SportsInjuriesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sports Injury Treatment</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get back in the game with specialized chiropractic care for athletes.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Chiropractic Care for Athletes</h2>
            <p>Whether you're a weekend warrior or a competitive athlete, sports injuries can sideline you from what you love. Our sports-focused chiropractic care helps you recover faster and perform better.</p>
            
            <h2>Common Sports Injuries We Treat</h2>
            <ul>
              <li><strong>Muscle Strains & Sprains:</strong> Pulled muscles and ligament injuries</li>
              <li><strong>Joint Injuries:</strong> Shoulder, knee, ankle, and wrist problems</li>
              <li><strong>Overuse Injuries:</strong> Repetitive stress injuries from training</li>
              <li><strong>Impact Injuries:</strong> Contact sport injuries and trauma</li>
              <li><strong>Performance Optimization:</strong> Injury prevention and peak performance</li>
            </ul>

            <h2>How We Help Athletes</h2>
            <p>Our approach combines chiropractic adjustments, soft tissue therapy, and rehabilitation exercises designed specifically for your sport. We work with you to not only heal your injury but also prevent future problems and enhance your performance.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Back in the Game</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
