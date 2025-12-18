import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wellness Chiropractic Care for Long-Term Health | Boise Chiropractors',
  description: 'Chiropractic care isn\'t just for fixing pain—it\'s for staying healthy. Here\'s how wellness chiropractic care works and who benefits most.',
  alternates: {
    canonical: 'https://boise-chiropractors.com/blogs/wellness-chiropractic-care',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/generated/wellness-chiropractic-care.webp"
          alt="Wellness Chiropractic Care in Boise"
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
            Wellness Chiropractic Care for Long-Term Health
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Most people only see chiropractors when something hurts. That's not the only way to use chiropractic care.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You wait until your back hurts to see a chiropractor. You don't schedule dental cleanings only when you have a cavity. You don't change your car's oil only when the engine starts making noise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Wellness chiropractic care applies that same preventive approach to your musculoskeletal health. Instead of waiting for problems to develop, you maintain proper function before pain shows up.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's what wellness chiropractic care actually means and whether it makes sense for you.
            </p>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">What Wellness Chiropractic Care Actually Is</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wellness chiropractic care means regular adjustments when you're not in acute pain. The goal is maintaining mobility, preventing minor issues from becoming major problems, and optimizing how your body moves.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This isn't about convincing everyone they need weekly adjustments forever. It's a different model that some people find valuable once their initial problem resolves.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Think of it this way: acute chiropractic care fixes a specific problem. You hurt your back, you get treated, you feel better, you're done. Wellness care maintains the improvements after you're better.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The frequency varies—some people come monthly, others quarterly, some just when they feel their body needs a tune-up. It's less structured than a treatment plan for pain.
            </p>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Who Actually Benefits from Wellness Care</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wellness chiropractic care makes the most sense for people with specific patterns in their life.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Athletes and active people.</strong> If you train regularly or play sports, your body takes consistent stress. Regular adjustments help maintain joint function and catch small imbalances before they sideline you. Many athletes in Boise use monthly chiropractic care as part of their training regimen.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>People with physically demanding jobs.</strong> Construction workers, landscapers, nurses—jobs that involve repetitive movements or heavy lifting create wear patterns. Preventive care helps manage that accumulated stress.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Anyone with a history of recurring problems.</strong> Your back goes out twice a year. You get tension headaches when you're stressed. If you have predictable patterns of pain, wellness care might reduce how often flare-ups happen.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Older adults maintaining mobility.</strong> As you age, joints lose some mobility and tissues become less resilient. Regular chiropractic care can help maintain function and independence. It's not about preventing aging—it's about aging better.
            </p>
          </div>
        </div>
      </section>

      {/* What It Includes Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Wellness Visits Actually Include</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wellness visits look different than acute care visits. You're not there to fix something specific, so the approach changes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Your chiropractor assesses how you're moving. They check joint mobility throughout your spine and extremities. They look for areas that feel restricted or imbalanced, even if you're not feeling pain there yet.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Adjustments focus on maintaining optimal function rather than correcting dysfunction. The techniques might be gentler than what's used for acute problems. Some chiropractors also include soft tissue work or recommend exercises to support what they're doing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Good wellness visits also involve education. Your chiropractor might notice you're developing tightness in your hips before it causes pain. They can suggest stretches or modifications to prevent the problem from progressing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              These visits are typically shorter than initial treatment visits. You're in and out in 15-20 minutes. The relationship becomes less about fixing problems and more about maintaining health.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What You Might Notice with Regular Care</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              People who stick with wellness chiropractic care in the Treasure Valley often report similar benefits:
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Fewer acute episodes.</strong> The back pain that used to happen twice a year becomes once a year or less frequent.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Better awareness of their body.</strong> You notice when something feels off before it becomes painful.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Improved recovery from activity.</strong> You bounce back faster after a hard workout or a long day of yard work.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Maintained mobility as they age.</strong> You keep doing the activities you enjoy without the gradual decline you see in others your age.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100"><strong>Less reliance on pain medication.</strong> Minor aches get addressed before they need ibuprofen.</span>
              </div>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed mt-6">
              These aren't guaranteed outcomes—everyone's different. But they represent common patterns among people who use chiropractic care preventively.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Considerations Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Wellness Care Costs in Boise</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The cost equation changes when you're talking about preventive care rather than treating acute pain.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Insurance coverage for wellness chiropractic care varies significantly. Some plans cover preventive visits. Many only cover symptomatic treatment. You might have coverage for 20 visits per year, but only when there's a documented medical condition.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Out-of-pocket costs for wellness visits in the Treasure Valley typically range from $40-65 per visit. Some chiropractors offer wellness packages with reduced rates if you're not using insurance. Monthly visits add up to $480-780 per year.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Is that worth it? That depends on your situation. If regular care prevents two episodes of acute back pain that would have required multiple emergency visits, you're ahead financially. If you value the mobility and comfort it provides, it's an investment in quality of life.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Be honest with yourself about whether you'll actually maintain the schedule. Wellness care only works if you're consistent. Sporadic visits don't provide much benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Is It Right For You Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">How to Know If Wellness Care Is Right for You</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Not everyone needs wellness chiropractic care. It's a choice, not a requirement for health.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Start with acute care if you have a specific problem. Get the issue resolved first. Then notice how long you stay comfortable. If you're still feeling great six months later, wellness care might not be necessary.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But if you notice the problem creeping back, or if you find yourself dealing with the same issue repeatedly, that's when preventive care makes sense. You're trying to break the cycle.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Talk to your chiropractor about your specific pattern. A good chiropractor won't pressure you into a wellness plan if you don't need it. They'll give you an honest assessment based on your history and goals.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Consider your lifestyle too. If you're highly active or have a physically demanding job, preventive care might save you from problems down the road. If you have a desk job and no history of issues, occasional visits when you feel tight might be enough.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wellness chiropractic care works for people who want to maintain musculoskeletal health proactively. It's not for everyone, and that's fine.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The people who benefit most are active individuals, those with physically demanding jobs, people with recurring problems, and anyone who wants to maintain mobility as they age.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              It's an investment—in time, money, and commitment. But for the right person, it's an investment that pays off in reduced pain, better function, and the ability to keep doing what you love.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in Wellness Chiropractic Care?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's talk about whether preventive care makes sense for your situation. We'll give you an honest assessment.
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
