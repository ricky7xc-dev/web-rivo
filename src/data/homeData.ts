// ============================================================
// Homepage Data — replace with API calls when ready
// ============================================================

export interface HeroItem {
  type: 'hero';
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  size?: 'full' | 'medium' | 'small';
  align?: 'center' | 'left';
  variant?: 'dark' | 'light';
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  link: string;
}

export interface CategorySectionItem {
  type: 'category';
  id: string;
  title: string;
  subtitle?: string;
  categories: CategoryItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  link: string;
}

export interface ProductSectionItem {
  type: 'product';
  id: string;
  title: string;
  subtitle?: string;
  products: ProductItem[];
  viewAllLink?: string;
}

export type HomeSectionItem = HeroItem | CategorySectionItem | ProductSectionItem;

// --- Dummy data ---

export const homeSections: HomeSectionItem[] = [
  // ---- HERO 1 ----
  {
    type: 'hero',
    id: 'hero-main',
    title: 'New Collection 2025',
    subtitle: 'Just Dropped',
    description: 'Discover the latest trends in modern men\'s fashion. Premium quality, timeless style.',
    ctaText: 'Shop Now',
    ctaLink: '/products',
    backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop',
    size: 'full',
    align: 'center',
    variant: 'dark',
  },

  // ---- CATEGORIES ----
  {
    type: 'category',
    id: 'categories-main',
    title: 'Shop by Category',
    subtitle: 'Find what suits your style',
    categories: [
      {
        id: 'cat-tshirt',
        name: 'T-Shirts',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
        link: '/products?category=tshirt',
      },
      {
        id: 'cat-pants',
        name: 'Pants',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
        link: '/products?category=pants',
      },
      {
        id: 'cat-jacket',
        name: 'Jackets',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
        link: '/products?category=jacket',
      },
      {
        id: 'cat-accessories',
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
        link: '/products?category=accessories',
      },
    ],
  },

  // ---- HERO 2 ----
  {
    type: 'hero',
    id: 'hero-promo',
    title: 'Summer Sale — Up to 50% Off',
    subtitle: 'Limited Time',
    description: 'Grab your favorite pieces before they\'re gone. Premium fits at unbeatable prices.',
    ctaText: 'Explore Deals',
    ctaLink: '/products?sale=true',
    backgroundImage: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1600&h=900&fit=crop',
    size: 'medium',
    align: 'left',
    variant: 'dark',
  },

  // ---- PRODUCTS ----
  {
    type: 'product',
    id: 'products-new-arrival',
    title: 'New Arrivals',
    subtitle: 'Fresh drops you don\'t want to miss',
    viewAllLink: '/products',
    products: [
      {
        id: 'prod-1',
        name: 'Essential Oversized Tee — Black',
        price: 249000,
        originalPrice: 349000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
        category: 'T-Shirts',
        badge: 'New',
        link: '/products/essential-oversized-tee',
      },
      {
        id: 'prod-2',
        name: 'Relaxed Fit Cargo Pants',
        price: 399000,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
        category: 'Pants',
        link: '/products/relaxed-fit-cargo',
      },
      {
        id: 'prod-3',
        name: 'Minimalist Leather Watch',
        price: 599000,
        originalPrice: 799000,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop',
        category: 'Accessories',
        badge: 'Sale',
        link: '/products/minimalist-watch',
      },
      {
        id: 'prod-4',
        name: 'Bomber Jacket — Olive',
        price: 549000,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
        category: 'Jackets',
        link: '/products/bomber-jacket-olive',
      },
    ],
  },

  // ---- HERO 3 ----
  {
    type: 'hero',
    id: 'hero-lookbook',
    title: 'The Lookbook',
    subtitle: 'Style Guide',
    description: 'Get inspired by our curated looks for every occasion.',
    ctaText: 'View Lookbook',
    ctaLink: '/lookbook',
    backgroundImage: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1600&h=900&fit=crop',
    size: 'medium',
    align: 'center',
    variant: 'dark',
  },

  // ---- PRODUCTS 2 ----
  {
    type: 'product',
    id: 'products-best-seller',
    title: 'Best Sellers',
    subtitle: 'Most loved by our customers',
    viewAllLink: '/products?sort=best-seller',
    products: [
      {
        id: 'prod-5',
        name: 'Classic Polo Shirt — White',
        price: 279000,
        image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop',
        category: 'T-Shirts',
        badge: 'Best Seller',
        link: '/products/classic-polo-white',
      },
      {
        id: 'prod-6',
        name: 'Slim Fit Chinos — Khaki',
        price: 349000,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
        category: 'Pants',
        link: '/products/slim-fit-chinos',
      },
      {
        id: 'prod-7',
        name: 'Canvas Tote Bag',
        price: 189000,
        originalPrice: 249000,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
        category: 'Accessories',
        badge: 'Sale',
        link: '/products/canvas-tote-bag',
      },
      {
        id: 'prod-8',
        name: 'Denim Jacket — Washed Blue',
        price: 499000,
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop',
        category: 'Jackets',
        link: '/products/denim-jacket-blue',
      },
    ],
  },
];
