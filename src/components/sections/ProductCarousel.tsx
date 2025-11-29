"use client";

import { products } from '@/data/products';
import { Product } from '@/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group cursor-pointer">
    <div className="relative bg-white aspect-3/4 mb-4 overflow-hidden border border-stone-100 rounded-sm">
      {product.tag && (
        <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
          {product.tag}
        </span>
      )}
      {/* Image container */}
      <div className="relative w-full h-full">
        <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      
      {/* Hover Action */}
      <button className="absolute bottom-0 left-0 w-full bg-stone-900 text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 font-medium z-20">
        <Plus size={16} /> Add to Cart
      </button>
    </div>
    <div className="space-y-1">
      <p className="text-xs text-stone-500 uppercase tracking-wide">{product.category}</p>
      <h3 className="font-bold text-lg text-stone-900 group-hover:text-stone-600 transition-colors">{product.name}</h3>
      <p className="text-stone-900 font-medium">${product.price.toFixed(2)}</p>
    </div>
  </div>
);

const ProductCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-stone-900">Our Popular Collection</h2>
          <p className="text-stone-500">Ergonomics meets aesthetics.</p>
        </div>
        <Link href="#" className="hidden md:block text-stone-900 border-b border-stone-900 pb-1 text-sm font-medium hover:opacity-70 transition-opacity">
            View All Chairs
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;