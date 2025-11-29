import Button from '../common/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Updated to .png */}
      <div className="absolute inset-0">
        <Image 
          src="/assets/banner.png" 
          alt="Zentrex Office Banner"
          fill
          priority
          quality={100}
          className="object-fill"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-stone-100/50 via-stone-100/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1]">
            Engineered for <br />
            <span className="text-stone-500">Perfection.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-md">
            Experience the synergy of aesthetic minimalism and ergonomic science with Zentrex. 
          </p>
          <div className="flex items-center gap-4">
            <Button>Shop Collection</Button>
            <div className="flex flex-col ml-8 border-l border-stone-300 pl-6">
              <span className="text-2xl font-bold text-stone-900">10k+</span>
              <span className="text-xs text-stone-500 uppercase tracking-wide">Happy Backs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;