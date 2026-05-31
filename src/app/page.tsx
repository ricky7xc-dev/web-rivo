import React from 'react';
import PageLayout from '@/components/templates/PageLayout/PageLayout';
import HeroSection from '@/components/organisms/HeroSection/HeroSection';
import CategorySection from '@/components/organisms/CategorySection/CategorySection';
import ProductSection from '@/components/organisms/ProductSection/ProductSection';
import { homeSections } from '@/data/homeData';
import type { HeroItem, CategorySectionItem, ProductSectionItem } from '@/data/homeData';

export default function Home() {
  return (
    <PageLayout>
      {homeSections.map((section) => {
        switch (section.type) {
          case 'hero': {
            const hero = section as HeroItem;
            return (
              <HeroSection
                key={hero.id}
                title={hero.title}
                subtitle={hero.subtitle}
                description={hero.description}
                ctaText={hero.ctaText}
                ctaLink={hero.ctaLink}
                backgroundImage={hero.backgroundImage}
                size={hero.size}
                align={hero.align}
                variant={hero.variant}
              />
            );
          }
          case 'category': {
            const cat = section as CategorySectionItem;
            return (
              <CategorySection
                key={cat.id}
                title={cat.title}
                subtitle={cat.subtitle}
                categories={cat.categories}
              />
            );
          }
          case 'product': {
            const prod = section as ProductSectionItem;
            return (
              <ProductSection
                key={prod.id}
                title={prod.title}
                subtitle={prod.subtitle}
                products={prod.products}
                viewAllLink={prod.viewAllLink}
              />
            );
          }
          default:
            return null;
        }
      })}
    </PageLayout>
  );
}
