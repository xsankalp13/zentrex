import Hero from '@/components/sections/Hero';
import FeaturesStrip from '@/components/sections/FeaturesStrip';
import ContentBlock from '@/components/sections/ContentBlock';
import ProductCarousel from '@/components/sections/ProductCarousel';
import TechSpecs from '@/components/sections/TechSpecs';
import AnatomyGrid from '@/components/sections/AnatomyGrid';
import ResearchGrid from '@/components/sections/ResearchGrid'; // NEW
import ScienceTrivia from '@/components/sections/ScienceTrivia'; // NEW
import Bibliography from '@/components/sections/Bibliography'; // NEW
import StatsBar from '@/components/sections/StatsBar'; 
import DesignQuote from '@/components/sections/DesignQuote';
import FadeIn from '@/components/common/FadeIn';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* 1. Trust & Features */}
      <FadeIn>
        <FeaturesStrip />
      </FadeIn>

      {/* 2. The Hard Data - Why it works (Citation Heavy) */}
      <ResearchGrid />

      {/* 3. The Physical Solution */}
      <AnatomyGrid />
      
      {/* 4. Product Deep Dive */}
      <section className="max-w-7xl mx-auto px-6">
        <FadeIn direction="right">
          <ContentBlock 
            image="/assets/chair-1.png"
            title="Correct Posture on Autopilot"
            text="You start the day sitting straight, but by 2 PM, you're slumping. The Zentrex Apex Ergo uses Active Spinal Assist to gently align your vertebrae [2]. It does the work of holding you up, so your muscles don't have to fatigue."
          />
        </FadeIn>
      
        <FadeIn direction="left">
          <ContentBlock 
            image="/assets/chair-2.png"
            title="Zero-Gravity Circulation"
            text="Sitting on foam for 8 hours cuts off circulation. Our suspension mesh creates a pressure-distribution effect [5], eliminating numbness in the ischial tuberosities (sit bones) and keeping blood flow active."
            reversed={true}
          />
        </FadeIn>
      </section>

      {/* 5. Fun Interactive Science */}
      <ScienceTrivia />

      {/* 6. Social Proof */}
      <StatsBar />
      <DesignQuote />

      {/* 7. Commerce */}
      <FadeIn>
        <ProductCarousel />
      </FadeIn>
      <TechSpecs />

      {/* 8. Testimonial */}
      <section className="bg-stone-50 py-24 border-t border-stone-100">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-serif italic mb-8 leading-relaxed text-stone-800">
              &quot;I used to end my coding sessions with a heating pad on my lower back. After one week with the Zentrex Apex, the pain is gone. I can finally focus on shipping code, not my back.&quot;
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden relative">
                 <Image 
                   src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                   alt="James Chen" 
                   fill
                   className="object-cover"
                 />
              </div>
              <div className="text-left">
                <p className="font-bold text-stone-900 text-sm">James Chen</p>
                <p className="text-xs text-stone-500">Senior DevOps Engineer</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 9. Citations Footer */}
      <Bibliography />
    </main>
  );
}