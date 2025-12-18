import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Performance Care Boise | Sports Chiropractic for Athletes | (208) 505-9352',
  description: 'Enhance athletic performance with chiropractic care in Boise. Improve mobility, prevent injuries, perform at your best. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-chiropractors.com/services/sports-injuries/performance-care' },
}

export default function PerformanceCarePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Performance Care in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Optimize your athletic performance with specialized chiropractic care.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>More Than Just Injury Treatment</h2>
            <p>You don't have to wait until you're hurt to see a chiropractor. More and more athletes are using chiropractic care as part of their regular training routine to perform better, recover faster, and prevent injuries. If you're serious about your sport or fitness, this is one of the smartest investments you can make.</p>

            <h2>How Chiropractic Care Enhances Performance</h2>
            <p>When your body is moving optimally, everything works better. Here's how regular chiropractic care can help:</p>

            <h3>Better Range of Motion</h3>
            <p>Restricted joints mean restricted movement. Whether you're a golfer who needs a full rotation, a runner who needs proper hip extension, or a lifter who needs optimal shoulder mobility, adjustments help you move the way you should.</p>

            <h3>Improved Balance and Coordination</h3>
            <p>Your nervous system controls everything. When your spine is functioning properly, your body can process information and respond more efficiently. This translates to better balance, coordination, and reaction time.</p>

            <h3>Faster Recovery</h3>
            <p>Regular adjustments help your body recover more effectively between training sessions. Less soreness, better sleep, and improved circulation all contribute to faster recovery and adaptation to training stress.</p>

            <h3>Injury Prevention</h3>
            <p>A lot of sports injuries happen because of underlying biomechanical issues—muscle imbalances, joint restrictions, or poor movement patterns. Addressing these proactively keeps you healthier and on the field (or trail, or court, or mat).</p>

            <h2>Who Benefits Most?</h2>
            <p>Competitive athletes at any level can benefit from performance care. We work with runners, cyclists, CrossFit athletes, martial artists, golfers, tennis players, and more. If you train seriously and want every advantage you can get, this is for you.</p>

            <h2>What to Expect</h2>
            <p>We'll start with a thorough assessment of how you move, looking for any restrictions, imbalances, or biomechanical issues. Then we'll create a care plan tailored to your sport and goals. Most athletes come in regularly—weekly, biweekly, or monthly—as part of their training routine.</p>

            <h2>The Competitive Edge</h2>
            <p>Professional and elite athletes have known about this for years. Nearly every professional sports team has a chiropractor on staff. But you don't have to be a pro to benefit. Whether you're training for your first 5K or your tenth Ironman, performance care can help you reach your goals.</p>

            <h2>Beyond the Physical</h2>
            <p>Athletes who get regular chiropractic care often report feeling more energized, sleeping better, and recovering more completely. It's not just about moving better—it's about feeling better overall.</p>

            <h2>Training Smart in Boise</h2>
            <p>The Boise area is full of dedicated athletes and fitness enthusiasts. From trail runners hitting the foothills to cyclists tackling local routes to gym-goers pushing their limits, we're here to help everyone perform at their best and stay healthy doing it.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Take Your Performance to the Next Level</h2>
          <p className="text-gray-200 mb-6">Schedule your performance evaluation today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
