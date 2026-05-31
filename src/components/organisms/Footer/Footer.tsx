import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-15">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-8 lg:gap-10 pb-10 border-b border-gray-800">
          {/* Brand column */}
          <div>
            <div className="text-2xl font-bold tracking-widest uppercase mb-4">Rivo</div>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium men&apos;s fashion brand crafted for the modern individual.
              Quality materials, timeless designs.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-700 text-gray-400 transition-all hover:border-white hover:text-white" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-700 text-gray-400 transition-all hover:border-white hover:text-white" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-700 text-gray-400 transition-all hover:border-white hover:text-white" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-5">Quick Links</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/products" className="text-sm text-gray-400 transition-colors hover:text-white">All Products</Link>
              <Link href="/products?category=tshirt" className="text-sm text-gray-400 transition-colors hover:text-white">T-Shirts</Link>
              <Link href="/products?category=pants" className="text-sm text-gray-400 transition-colors hover:text-white">Pants</Link>
              <Link href="/products?category=jacket" className="text-sm text-gray-400 transition-colors hover:text-white">Jackets</Link>
              <Link href="/products?category=accessories" className="text-sm text-gray-400 transition-colors hover:text-white">Accessories</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-5">Customer Service</div>
            <div className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Contact Us</Link>
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Size Guide</Link>
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Shipping Info</Link>
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">Returns & Exchange</Link>
              <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white">FAQ</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-5">Stay Updated</div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Subscribe to get the latest drops and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3.5 py-2.5 bg-gray-800 border border-gray-700 border-r-0 rounded-l text-white text-sm outline-none placeholder:text-gray-500 focus:border-gray-500"
                aria-label="Email for newsletter"
              />
              <button className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wide rounded-r transition-all hover:bg-gray-200">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="py-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Rivo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
