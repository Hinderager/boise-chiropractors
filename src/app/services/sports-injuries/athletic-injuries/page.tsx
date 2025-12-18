import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Athletic Injury Treatment Boise | Sports Chiropractor | (208) 505-9352',
  description: 'Expert treatment for athletic injuries in Boise. Get back in the game faster with specialized sports chiropractic care. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/sports-injuries/athletic-injuries' },
}

export default function AthleticInjuriesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Athletic Injury Treatment in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get back to your sport with expert chiropractic care for athletes.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Injuries Happen—Recovery Matters</h2>
            <p>Whether you're a weekend warrior, a competitive athlete, or just someone who loves staying active, injuries can sideline you. The good news is that the right treatment can get you back to doing what you love faster—and help prevent future injuries.</p>

            <h2>Common Athletic Injuries We Treat</h2>
            <p>We work with athletes of all levels dealing with various injuries:</p>
            <ul>
              <li>Sprains and strains</li>
              <li>Shoulder injuries (rotator cuff, impingement)</li>
              <li>Knee pain and instability</li>
              <li>Ankle injuries</li>
              <li>Tennis and golfer's elbow</li>
              <li>Hip and groin pain</li>
              <li>Running-related injuries (IT band, shin splints)</li>
              <li>Back and neck pain from impact sports</li>
            </ul>

            <h2>Our Approach</h2>
            <p>We don't just treat the injury—we figure out what caused it in the first place. Maybe it's a muscle imbalance, poor form, overtraining, or a biomechanical issue. Addressing the root cause helps you heal faster and reduces your risk of getting hurt again.</p>

            <p>Our treatment typically includes adjustments to restore proper joint function, soft tissue work to reduce inflammation and promote healing, and specific exercises to rebuild strength and stability.</p>

            <h2>Getting You Back in the Game</h2>
            <p>Our goal is to get you back to your sport safely and as quickly as possible. We'll work with you to create a recovery plan that includes not just treatment, but also a gradual return to activity. Pushing too hard too fast is how a lot of athletes end up with chronic problems.</p>

            <h2>Beyond Injury Treatment</h2>
            <p>We also help athletes optimize their performance and prevent injuries. Regular chiropractic care can improve your range of motion, balance, and overall function—all of which can give you an edge and keep you healthier long-term.</p>

            <h2>Who We Work With</h2>
            <p>We've treated runners training for marathons, high school athletes, CrossFit enthusiasts, cyclists, recreational league players, and everyone in between. Whatever your sport or fitness activity, we understand the demands it places on your body.</p>

            <h2>Active People in Boise</h2>
            <p>The Boise area has an incredibly active community—hiking, biking, running, skiing, you name it. We love helping people stay active and healthy so they can enjoy everything the Treasure Valley has to offer.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Recover Faster, Perform Better</h2>
          <p className="text-gray-200 mb-6">Schedule your sports injury evaluation today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
