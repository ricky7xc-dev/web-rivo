// ============================================================
// Product Listing Data — replace with API calls when ready
// ============================================================

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  link: string;
}

export interface FilterCategory {
  id: string;
  label: string;
  count: number;
}

export const filterCategories: FilterCategory[] = [
  { id: 'tshirt', label: 'T-Shirts', count: 24 },
  { id: 'pants', label: 'Pants', count: 18 },
  { id: 'jacket', label: 'Jackets', count: 12 },
  { id: 'accessories', label: 'Accessories', count: 15 },
  { id: 'hoodie', label: 'Hoodies', count: 9 },
  { id: 'shirt', label: 'Shirts', count: 21 },
];

export const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'best-seller', label: 'Best Seller' },
];

export const allProducts: Product[] = [
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
  {
    id: 'prod-9',
    name: 'Graphic Print Hoodie — Grey',
    price: 329000,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    category: 'Hoodies',
    badge: 'New',
    link: '/products/graphic-hoodie-grey',
  },
  {
    id: 'prod-10',
    name: 'Linen Button-Up Shirt',
    price: 309000,
    originalPrice: 429000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    category: 'Shirts',
    badge: 'Sale',
    link: '/products/linen-button-up',
  },
  {
    id: 'prod-11',
    name: 'Premium Jogger Pants',
    price: 359000,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop',
    category: 'Pants',
    link: '/products/premium-jogger',
  },
  {
    id: 'prod-12',
    name: 'Leather Belt — Matte Black',
    price: 179000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
    category: 'Accessories',
    link: '/products/leather-belt-black',
  },
];
