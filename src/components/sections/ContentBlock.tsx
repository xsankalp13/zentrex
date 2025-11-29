import Button from '../common/Button';
import Image from 'next/image';

interface ContentBlockProps {
  image: string;
  title: string;
  text: string;
  reversed?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ image, title, text, reversed = false }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}>
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[800px] relative bg-stone-100 group overflow-hidden rounded-sm">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 "
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900">{title}</h2>
        <p className="text-stone-600 mb-8 leading-relaxed text-lg">
          {text}
        </p>
        <Button variant="outline">Read More</Button>
      </div>
    </div>
  );
};

export default ContentBlock;