import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Auto Accident Injury Treatment | Whiplash Recovery | Boise Chiropractors',
  description: 'Expert auto accident injury treatment in Boise. Whiplash, back pain, and soft tissue injuries. We work with insurance. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/auto-accidents' },
}

export default function AutoAccidentsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Auto Accident Recovery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Comprehensive care for car accident injuries. We work with your insurance.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Expert Care After an Auto Accident</h2>
            <p>Even minor car accidents can cause serious injuries that don't show symptoms right away. Getting prompt chiropractic care after an accident can prevent long-term problems and speed your recovery.</p>
            
            <h2>Auto Accident Injuries We Treat</h2>
            <ul>
              <li><strong>Whiplash:</strong> Neck injuries from sudden impact</li>
              <li><strong>Back & Spine Injuries:</strong> Herniated discs and spinal trauma</li>
              <li><strong>Soft Tissue Damage:</strong> Muscle, ligament, and tendon injuries</li>
              <li><strong>Headaches:</strong> Post-accident chronic headaches</li>
              <li><strong>Joint Pain:</strong> Shoulder, hip, and knee injuries</li>
            </ul>

            <h2>We Work With Insurance</h2>
            <p>We understand the stress of dealing with insurance after an accident. We'll work directly with your auto insurance or personal injury protection to help you get the care you need. Documentation and reports are provided for your claim.</p>

            <h2>Don't Wait to Get Treatment</h2>
            <p>Many accident injuries worsen if left untreated. Even if you feel okay now, it's important to get checked out. Early treatment leads to better outcomes and faster recovery.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Been in an Accident? Call Now</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
