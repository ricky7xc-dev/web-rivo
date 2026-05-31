import React from 'react';
import Link from 'next/link';
import type { CategoryItem } from '@/data/homeData';

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  categories: CategoryItem[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  subtitle,
  categories,
}) => {
  return (
    <section className="py-15">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-gray-900">{title}</h2>
          {subtitle && <p className="text-[0.9375rem] text-gray-500 mt-2">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.link} className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                <span className="text-lg font-semibold text-white uppercase tracking-wide">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
