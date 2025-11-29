"use client";

import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-stone-900">
          ZENTREX<span className="text-stone-400">.</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-12 text-sm font-medium text-stone-600">
          {['Home', 'Ergonomic', 'Executive', 'Accessories'].map((item) => (
            <Link key={item} href="/" className="hover:text-black transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Search size={20} className="text-stone-600 cursor-pointer hover:text-black" />
          <div className="relative group cursor-pointer">
            <ShoppingBag size={20} className="text-stone-600 group-hover:text-black" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </div>
          <Menu size={24} className="md:hidden text-stone-900" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;