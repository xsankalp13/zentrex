import Hero from '@/components/sections/Hero';
import FeaturesStrip from '@/components/sections/FeaturesStrip';
import ContentBlock from '@/components/sections/ContentBlock';
import ProductCarousel from '@/components/sections/ProductCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturesStrip />
      
      {/* Zig-Zag Section 1 - Using Chair 1 (.png) */}
      <section className="max-w-7xl mx-auto px-6">
        <ContentBlock 
          image="/assets/chair-1.png"
          title="Sculpted for the Human Form"
          text="The Zentrex Apex Ergo isn't just a chair; it's a command center. Featuring our proprietary Adaptive Mesh technology, it contours to your spine's natural curvature, ensuring focus remains unbroken."
        />
      
        {/* Zig-Zag Section 2 - Using Chair 2 (.png) */}
        <ContentBlock 
          image="/assets/chair-2.png"
          title="Minimalist Design, Maximum Comfort"
          text="For the modern workspace that demands elegance without compromise. The Lumbar Air combines a lightweight aluminum alloy frame with breathable suspension, making long hours feel like moments."
          reversed={true}
        />
      </section>

      <ProductCarousel />

      {/* Testimonial Section */}
      <section className="bg-stone-50 py-24 mt-12 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-serif italic mb-8 leading-relaxed text-stone-800">
            &quot;Complete application integrated and simple. Zentrex transformed how our developers sit, work, and create. It&apos;s not furniture, it&apos;s productivity.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden relative">
               {/* Using a placeholder avatar */}
               <Image 
                 src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                 alt="User" 
                 fill
                 className="object-cover"
               />
            </div>
            <div className="text-left">
              <p className="font-bold text-stone-900 text-sm">Amanda Wager</p>
              <p className="text-xs text-stone-500">Product Manager, Deluxe</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}