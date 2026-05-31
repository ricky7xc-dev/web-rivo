'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/templates/PageLayout/PageLayout';
import { allProducts, filterCategories, sortOptions } from '@/data/productData';

function formatPrice(price: number): string {
  return 'Rp ' + price.toLocaleString('id-ID');
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategories.length > 0) {
      products = products.filter((p) => {
        const catId = p.category.toLowerCase().replace(/s$/, '').replace(/ /g, '');
        return selectedCategories.some((sc) => catId.includes(sc));
      });
    }

    if (minPrice) {
      products = products.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      products = products.filter((p) => p.price <= Number(maxPrice));
    }

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'best-seller':
        products.sort((a, b) => (a.badge === 'Best Seller' ? -1 : b.badge === 'Best Seller' ? 1 : 0));
        break;
      default:
        break;
    }

    return products;
  }, [searchQuery, selectedCategories, sortBy, minPrice, maxPrice]);

  return (
    <PageLayout>
      <div className="w-full max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 pb-15">
          {/* Sidebar — 20% */}
          <aside className="w-full md:w-1/5 md:min-w-[220px] shrink-0">
            {/* Search */}
            <div className="mb-7">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 pb-2 border-b border-gray-200">Search</h3>
              <input
                type="text"
                className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm outline-none transition-colors focus:border-black bg-white placeholder:text-gray-400"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="mb-7">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 pb-2 border-b border-gray-200">Categories</h3>
              {filterCategories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2.5 py-1.5 cursor-pointer text-sm text-gray-900 transition-colors hover:text-black">
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span>{cat.label}</span>
                  <span className="ml-auto text-xs text-gray-500">({cat.count})</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-7">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 pb-2 border-b border-gray-200">Price Range</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="w-full px-2.5 py-2 border border-gray-200 rounded text-xs text-center outline-none focus:border-black"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="text-sm text-gray-500">—</span>
                <input
                  type="number"
                  className="w-full px-2.5 py-2 border border-gray-200 rounded text-xs text-center outline-none focus:border-black"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </aside>

          {/* Product listing — 80% */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <span className="text-sm text-gray-500">
                Showing {filteredProducts.length} products
              </span>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="sort-select" className="text-gray-500">Sort by:</label>
                <select
                  id="sort-select"
                  className="px-2.5 py-1.5 border border-gray-200 rounded text-xs bg-white outline-none cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {filteredProducts.map((product) => {
                const discount = product.originalPrice
                  ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                  : null;

                return (
                  <Link key={product.id} href={product.link} className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-250 hover:shadow-md hover:-translate-y-0.5">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-black text-white text-[11px] font-bold tracking-wide uppercase rounded">
                          {product.badge}
                        </span>
                      )}
                      <button
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                        aria-label="Add to wishlist"
                        onClick={(e) => e.preventDefault()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-3 md:p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
                      <h3 className="text-[0.9375rem] font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-gray-900">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-[0.8125rem] text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                        {discount && (
                          <span className="text-xs font-semibold text-danger">-{discount}%</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-15 text-gray-500">
                <p className="text-lg mb-2">No products found</p>
                <p className="text-sm">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
