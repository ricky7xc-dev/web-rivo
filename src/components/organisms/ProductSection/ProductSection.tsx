'use client';

import React from 'react';
import Link from 'next/link';
import type { ProductItem } from '@/data/homeData';

function formatPrice(price: number): string {
  return 'Rp ' + price.toLocaleString('id-ID');
}

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <Link href={product.link} className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-250 hover:shadow-md hover:-translate-y-0.5">
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
      <div className="p-4 md:p-4">
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
};

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: ProductItem[];
  viewAllLink?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  viewAllLink,
}) => {
  return (
    <section className="py-15 bg-gray-100">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-gray-900">{title}</h2>
          {subtitle && <p className="text-[0.9375rem] text-gray-500 mt-2">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {viewAllLink && (
          <div className="text-center mt-8">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide uppercase rounded border-2 border-black text-black bg-transparent transition-all duration-250 hover:bg-black hover:text-white"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
