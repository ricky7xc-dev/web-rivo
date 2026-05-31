'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/templates/PageLayout/PageLayout';
import { productDetails, getRecommendedProducts } from '@/data/productDetailData';

function formatPrice(price: number): string {
  return 'Rp ' + price.toLocaleString('id-ID');
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = productDetails[slug];

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id ?? '');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const recommended = getRecommendedProducts(slug, 4);
  const selectedColorObj = product.colors.find((c) => c.id === selectedColor);

  return (
    <PageLayout>
      <div className="w-full max-w-[1280px] mx-auto px-5">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 py-4 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-gray-900">Home</Link>
          <span className="text-[0.75rem] opacity-50">/</span>
          <Link href="/products" className="transition-colors hover:text-gray-900">Products</Link>
          <span className="text-[0.75rem] opacity-50">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Product detail */}
        <section className="py-2 pb-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left — Image Gallery */}
            <div className="md:sticky md:top-[80px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 cursor-zoom-in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-250"
                  key={selectedImage}
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-black text-white text-xs font-bold tracking-wide uppercase rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex gap-2.5 mt-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`w-[72px] h-[90px] rounded overflow-hidden shrink-0 bg-gray-100 transition-all duration-150 border-2 ${
                      idx === selectedImage ? 'border-black' : 'border-transparent hover:opacity-80'
                    }`}
                    onClick={() => setSelectedImage(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`${product.name} — view ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Product Info */}
            <div className="pt-2">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-2xl md:text-[1.75rem] font-bold leading-snug text-gray-900 mb-3">{product.name}</h1>

              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-base text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
                {discount && (
                  <span className="text-sm font-semibold text-danger">-{discount}%</span>
                )}
              </div>

              <p className="text-[0.9375rem] leading-relaxed text-gray-600 mb-7 pb-7 border-b border-gray-200">
                {product.description}
              </p>

              {/* Color selector */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2.5 flex items-center gap-2">
                  Color {selectedColorObj && <span className="font-normal normal-case text-gray-500 tracking-normal">— {selectedColorObj.name}</span>}
                </div>
                <div className="flex gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      className={`w-8 h-8 rounded-full p-0 transition-transform duration-150 hover:scale-110 ${
                        selectedColor === color.id ? 'shadow-[0_0_0_2px_white,0_0_0_4px_black]' : ''
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        border: color.hex === '#FFFFFF' ? '1.5px solid #d4d4d4' : 'none',
                      }}
                      onClick={() => setSelectedColor(color.id)}
                      aria-label={color.name}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size selector */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2.5 flex items-center gap-2">
                  Size {selectedSize && <span className="font-normal normal-case text-gray-500 tracking-normal">— {selectedSize}</span>}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`min-w-[44px] h-11 px-3 rounded text-xs font-semibold transition-all duration-150 flex items-center justify-center border ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-900 border-gray-200 hover:border-black'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2.5">Quantity</div>
                <div className="flex items-center w-fit border border-gray-200 rounded overflow-hidden">
                  <button
                    className="w-10 h-10 flex items-center justify-center text-lg text-gray-900 transition-colors hover:bg-gray-100"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center text-[0.9375rem] font-semibold border-x border-gray-200">
                    {quantity}
                  </div>
                  <button
                    className="w-10 h-10 flex items-center justify-center text-lg text-gray-900 transition-colors hover:bg-gray-100"
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-7 pt-7 border-t border-gray-200">
                <button className="flex-1 py-3.5 px-8 bg-black text-white text-sm font-bold uppercase tracking-wide rounded border-2 border-black transition-all duration-250 hover:bg-white hover:text-black">
                  Add to Cart
                </button>
                <button className="w-[52px] h-[52px] shrink-0 border-2 border-gray-200 rounded flex items-center justify-center transition-all duration-150 hover:border-black" aria-label="Add to wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-7 pt-7 border-t border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-3">Product Details</h3>
                <div className="flex flex-col gap-2">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">SKU: {product.sku}</p>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          {recommended.length > 0 && (
            <div className="mt-15 pt-12 border-t border-gray-200">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-gray-900">You May Also Like</h2>
                <p className="text-[0.9375rem] text-gray-500 mt-2">Handpicked recommendations for you</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {recommended.map((rec) => {
                  const recDiscount = rec.originalPrice
                    ? Math.round(((rec.originalPrice - rec.price) / rec.originalPrice) * 100)
                    : null;
                  return (
                    <Link key={rec.id} href={`/products/${rec.slug}`} className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-250 hover:shadow-md hover:-translate-y-0.5">
                      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={rec.images[0]}
                          alt={rec.name}
                          className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        {rec.badge && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 bg-black text-white text-[11px] font-bold tracking-wide uppercase rounded">
                            {rec.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-3 md:p-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{rec.category}</p>
                        <h3 className="text-[0.9375rem] font-medium text-gray-900 mb-1 line-clamp-2">{rec.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">{formatPrice(rec.price)}</span>
                          {rec.originalPrice && (
                            <span className="text-[0.8125rem] text-gray-500 line-through">{formatPrice(rec.originalPrice)}</span>
                          )}
                          {recDiscount && (
                            <span className="text-xs font-semibold text-danger">-{recDiscount}%</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
}
