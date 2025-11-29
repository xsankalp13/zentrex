import Button from '../common/Button';
import Image from 'next/image';
import FadeIn from '../common/FadeIn';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/assets/banner.png" 
          alt="Ergonomic Office Setup"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-stone-100/95 via-stone-100/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <FadeIn className="max-w-2xl space-y-8">
          <div className="inline-block bg-red-50 text-red-600 px-4 py-2 text-xs font-bold tracking-widest uppercase mb-2 rounded-sm border border-red-100">
            Stop The Chronic Pain
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1]">
            Your 9-to-5 shouldn't <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-stone-500 to-stone-800">destroy your spine.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
            Standard office chairs compress your vertebrae and kill productivity. 
            Zentrex is engineered to eliminate the "Lumbar Gap," ensuring you end 
            a 12-hour coding marathon feeling as fresh as when you started.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button>Fix Your Posture</Button>
            <div className="flex flex-col ml-8 border-l border-stone-300 pl-6">
              <span className="text-2xl font-bold text-stone-900">12h+</span>
              <span className="text-xs text-stone-500 uppercase tracking-wide">Pain-Free Sitting</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;