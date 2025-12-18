const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does a chiropractic adjustment cost in Boise?', answer: 'Initial chiropractic visits in Boise typically cost $75-150 including exam and adjustment. Follow-up adjustments usually cost $40-75. Many insurance plans cover chiropractic care.' },
  { question: 'Does chiropractic treatment hurt?', answer: 'Most people feel immediate relief after an adjustment. You might hear popping sounds—that\'s normal. Some patients feel mild soreness afterward, but it passes quickly.' },
  { question: 'How many chiropractic visits will I need?', answer: 'It depends on your condition. Acute issues might need just a few visits. Chronic problems take longer. After your exam, we\'ll give you a realistic treatment plan.' },
  { question: 'Do you take insurance for chiropractic care?', answer: 'Yes! We work with most major insurance plans including auto accident and workers\' compensation cases. Call (208) 505-9352 to verify your coverage.' },
  { question: 'Can chiropractors help with headaches?', answer: 'Yes. Many headaches come from neck tension and spinal misalignment. We\'ve helped countless patients reduce or eliminate chronic headaches and migraines.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "name": `Boise Chiropractors - ${city}`,
    "description": `Expert chiropractic care in ${city}, Idaho. Back pain relief, neck pain treatment, sports injuries, auto accident recovery. Licensed chiropractors. Same day appointments available.`,
    "url": "https://boise-chiropractors.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-chiropractors.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Chiropractic Adjustments", "Back Pain Treatment", "Neck Pain Relief", "Sports Injury Treatment", "Auto Accident Injury", "Whiplash Treatment", "Sciatica Treatment", "Wellness Care"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Chiropractic Services",
    "provider": { "@type": "Chiropractor", "name": "Boise Chiropractors" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Expert chiropractic care in ${city} and the Treasure Valley. Back pain relief, neck pain treatment, sports injuries, auto accident recovery, and wellness care.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
