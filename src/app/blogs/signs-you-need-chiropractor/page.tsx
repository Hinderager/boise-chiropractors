import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '7 Signs You Need to See a Chiropractor | Boise Chiropractors',
  description: 'Your body is probably warning you. Here are 7 signs that it\'s time to see a chiropractor in Boise—catch problems early and feel better faster.',
  alternates: {
    canonical: 'https://boise-chiropractors.com/blogs/signs-you-need-chiropractor',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/chiropractic-signs.webp"
          alt="Signs You Need a Chiropractor"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            7 Signs You Need to See a Chiropractor
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Your body usually warns you before things get worse. Here's what to watch for.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Most people wait until the pain is unbearable before seeing a chiropractor. They deal with nagging discomfort for weeks or months, hoping it'll go away on its own. Sometimes it does. Often it doesn't.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Your body sends signals when something's wrong. The trick is recognizing them before a minor problem becomes a major one that sidelines you from work, exercise, or just living comfortably.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here are seven warning signs that it's time to see a chiropractor in Boise. Catch these early, and you're looking at faster relief. Ignore them, and you might be dealing with chronic pain.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 1 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">1. Persistent Back or Neck Pain</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This one's obvious, but people still wait way too long. If your back or neck has been hurting for more than a week or two, that's not normal wear and tear.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Maybe it's a dull ache that won't quit. Maybe it's sharp pain when you move certain ways. Maybe it started after lifting something heavy, or maybe it just showed up one morning. Doesn't matter—persistent pain means something's off.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Chiropractors in the Treasure Valley see this constantly. Spinal misalignments, muscle tension, joint restrictions—these create pain that doesn't resolve on its own. The earlier you address it, the less time it takes to fix.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 2 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">2. Frequent Headaches</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Not all headaches come from your head. Many originate in your neck—tension headaches, cervicogenic headaches, even some migraines trace back to spinal issues.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If you're getting headaches several times a week, especially if they start at the base of your skull or come with neck stiffness, your spine might be the culprit. Poor posture, desk work, looking down at phones—all create neck stress that manifests as head pain.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Chiropractic adjustments can address the underlying neck dysfunction. Not every headache responds to chiropractic care, but for tension-type and cervicogenic headaches, it's often more effective than popping ibuprofen every day.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 3 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">3. Limited Range of Motion</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Notice you can't turn your head as far as you used to? Bending over to tie your shoes feels harder? Your flexibility is decreasing without an obvious injury?
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Reduced range of motion doesn't happen overnight. It's gradual—so gradual you might not realize how restricted you've become until someone points it out or you try to do something that used to be easy.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              This often indicates joint dysfunction or muscle tightness affecting your movement patterns. Chiropractors assess movement quality and can help restore normal range through adjustments and mobility work.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 4 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">4. Sharp Pain When Sitting or Standing</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Does sitting at your desk in Boise create sharp pain after an hour? Does standing for long periods make your lower back scream? These position-dependent pains often point to spinal issues.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Your spine should handle basic positions without complaint. If certain postures consistently trigger pain, your body's telling you something's mechanically wrong. Could be disc irritation, facet joint problems, or muscle imbalances.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Chiropractors can identify which structures are causing problems and address them. Sometimes it's as simple as restoring proper joint motion. Sometimes you need additional work on muscle patterns or ergonomics.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 5 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">5. Numbness or Tingling in Arms or Legs</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pins and needles, numbness, or weird tingling sensations down your arms or legs aren't something to ignore. These symptoms suggest nerve involvement.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nerves exit your spine and travel to your extremities. When something compresses or irritates those nerves—disc bulges, bone spurs, tight muscles—you get referred symptoms away from the source. Your hand might tingle because of a neck problem.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Chiropractors are trained to assess nerve-related symptoms and determine whether they can help or if you need referral to a medical specialist. Early intervention often prevents worsening.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 6 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">6. Recent Accident or Injury</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Got rear-ended on I-84? Took a fall while hiking the Boise foothills? Sports injury playing basketball? Even if you don't feel terrible immediately, get checked.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Trauma affects your spine in ways that aren't always obvious right away. Whiplash symptoms can take days to fully appear. Minor misalignments from impacts create problems later if not addressed.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Post-accident chiropractic care helps restore normal function and can prevent chronic issues from developing. Your body might feel okay now, but addressing biomechanical problems early prevents them from becoming permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 7 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">7. Your Shoes Wear Unevenly</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Look at the soles of your most-worn shoes. If one side is significantly more worn than the other, that's not just about your shoes—it's about your body mechanics.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Uneven wear patterns indicate you're not distributing weight evenly when you walk. This usually means your pelvis isn't level, your spine's rotated, or you're compensating for an old injury. Over time, these imbalances create stress on joints and soft tissue.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Chiropractors can assess your gait, posture, and spinal alignment to identify why you're wearing your shoes unevenly. Correcting the underlying imbalance prevents accelerated wear on your joints.
            </p>
          </div>
        </div>
      </section>

      {/* When to Call - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When to See a Chiropractor in Boise</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              If you noticed yourself in one or more of these signs, it's worth getting evaluated. Most musculoskeletal problems are easier to fix when caught early.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              The worst time to need chiropractic care is when you can barely move and every chiropractor in the Treasure Valley is booked out. Schedule an evaluation before things get desperate.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Same-day appointments available</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Thorough initial assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Insurance accepted</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Serving all of Treasure Valley</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your body talks to you through these warning signs. Persistent pain, frequent headaches, reduced movement, position-dependent pain, nerve symptoms, recent injuries, and uneven wear patterns all indicate something needs attention.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Addressing problems early almost always takes less time and money than waiting until you're in crisis. And it's definitely more comfortable than toughing it out while things get progressively worse.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Listen to what your body's telling you. When it starts complaining, it's probably time to see someone who speaks the language.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experiencing Any of These Signs?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait for things to get worse. We'll assess what's going on and explain your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Serving Boise, Meridian, Nampa & the Treasure Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-[#0b7fb6] transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
