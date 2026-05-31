'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Dummy search data — replace with API
const searchHistory = ['oversized tee', 'cargo pants', 'leather watch'];
const recommendedSearches = ['Summer Collection', 'New Arrivals', 'Best Sellers', 'Sale Items', 'Jackets'];
const recommendedProducts = [
  {
    id: 'prod-1',
    name: 'Essential Oversized Tee — Black',
    price: 249000,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=250&fit=crop',
    link: '/products/essential-oversized-tee',
  },
  {
    id: 'prod-3',
    name: 'Minimalist Leather Watch',
    price: 599000,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=250&fit=crop',
    link: '/products/minimalist-watch',
  },
  {
    id: 'prod-4',
    name: 'Bomber Jacket — Olive',
    price: 549000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=250&fit=crop',
    link: '/products/bomber-jacket-olive',
  },
  {
    id: 'prod-9',
    name: 'Graphic Print Hoodie — Grey',
    price: 329000,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=250&fit=crop',
    link: '/products/graphic-hoodie-grey',
  },
];

function formatPrice(price: number): string {
  return 'Rp ' + price.toLocaleString('id-ID');
}

const navLinkClass = "text-sm font-medium tracking-wide uppercase relative hover:opacity-80 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-250 hover:after:w-full";

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-black text-white h-[60px] border-b border-gray-800">
        <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
            Rivo
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/products" className={navLinkClass}>Products</Link>
            <Link href="/about" className={navLinkClass}>About</Link>
          </nav>

          <div className="flex items-center gap-5">
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:bg-white/10 relative"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            <button className="flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:bg-white/10 relative" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">0</span>
            </button>

            <Link href="/login" className="hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:bg-white/10" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>

            <button className="flex md:hidden items-center justify-center w-9 h-9" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Search panel */}
          <div className="relative bg-white w-full animate-slide-down">
            {/* Search bar */}
            <div className="border-b border-gray-200">
              <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center gap-4 h-[60px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="flex-1 text-base text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      setIsSearchOpen(false);
                      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                    }
                  }}
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search content */}
            <div className="w-full max-w-[1280px] mx-auto px-5 py-6 max-h-[calc(100dvh-60px)] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-8">
                {/* Search History */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Recent Searches</h3>
                  <div className="flex flex-col gap-1">
                    {searchHistory.map((term) => (
                      <button
                        key={term}
                        className="flex items-center gap-3 py-2 px-2 -mx-2 rounded text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors text-left"
                        onClick={() => {
                          setSearchQuery(term);
                          searchInputRef.current?.focus();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recommended Searches */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {recommendedSearches.map((term) => (
                      <button
                        key={term}
                        className="px-3.5 py-1.5 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-black hover:text-black transition-colors"
                        onClick={() => {
                          setSearchQuery(term);
                          searchInputRef.current?.focus();
                        }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recommended Products */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Recommended</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {recommendedProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={product.link}
                        className="group flex gap-3 p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <div className="w-14 h-[70px] rounded overflow-hidden bg-gray-100 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">{product.name}</p>
                          <p className="text-sm font-bold text-gray-900 mt-1">{formatPrice(product.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
