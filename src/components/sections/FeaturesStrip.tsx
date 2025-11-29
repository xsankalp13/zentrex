import { CreditCard, Truck, ShieldCheck, Box, LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4 items-start p-6 bg-white border border-stone-100 hover:shadow-lg transition-shadow duration-300 rounded-sm">
    <div className="p-3 bg-stone-50 rounded-full text-stone-900">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FeaturesStrip = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-stone-900">Why Choose Zentrex</h2>
        <p className="text-stone-500">Premium service for a premium product.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureItem icon={CreditCard} title="Secure Payment" desc="Encrypted transactions for your peace of mind." />
        <FeatureItem icon={ShieldCheck} title="5-Year Warranty" desc="Comprehensive coverage on mesh and mechanics." />
        <FeatureItem icon={Truck} title="Free Shipping" desc="Complimentary delivery on all Pro models." />
        <FeatureItem icon={Box} title="30-Day Trial" desc="Sit on it. Love it, or return it for free." />
      </div>
    </div>
  );
};

export default FeaturesStrip;