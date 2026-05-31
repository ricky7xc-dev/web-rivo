// ============================================================
// Product Detail Data — replace with API calls when ready
// ============================================================

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  details: string[];
  sku: string;
}

// Lookup map: slug → product detail
export const productDetails: Record<string, ProductDetail> = {
  'essential-oversized-tee': {
    id: 'prod-1',
    slug: 'essential-oversized-tee',
    name: 'Essential Oversized Tee — Black',
    price: 249000,
    originalPrice: 349000,
    badge: 'New',
    category: 'T-Shirts',
    description:
      'Our signature oversized tee crafted from 100% premium combed cotton. Features a relaxed drop-shoulder fit, ribbed crew neck, and a slightly elongated hem for effortless layering. The perfect foundation for any streetwear-inspired outfit.',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { id: 'black', name: 'Black', hex: '#000000' },
      { id: 'white', name: 'White', hex: '#FFFFFF' },
      { id: 'gray', name: 'Charcoal', hex: '#404040' },
      { id: 'navy', name: 'Navy', hex: '#1a1a2e' },
    ],
    details: [
      '100% Premium Combed Cotton (220gsm)',
      'Oversized / Relaxed Fit',
      'Drop Shoulder Design',
      'Ribbed Crew Neckline',
      'Pre-shrunk & Color-fast',
      'Machine Washable',
    ],
    sku: 'RIVO-TEE-BLK-001',
  },
  'relaxed-fit-cargo': {
    id: 'prod-2',
    slug: 'relaxed-fit-cargo',
    name: 'Relaxed Fit Cargo Pants',
    price: 399000,
    category: 'Pants',
    description:
      'Modern cargo pants with a relaxed tapered silhouette. Made from durable twill cotton with six functional pockets, adjustable waist tab, and a comfortable mid-rise fit. Versatile enough for both casual outings and weekend adventures.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&h=1000&fit=crop',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { id: 'olive', name: 'Olive', hex: '#556b2f' },
      { id: 'khaki', name: 'Khaki', hex: '#c3b091' },
      { id: 'black', name: 'Black', hex: '#000000' },
    ],
    details: [
      '100% Twill Cotton',
      'Relaxed Tapered Fit',
      '6 Functional Pockets',
      'Adjustable Waist Tab',
      'Mid-Rise',
      'YKK Zipper',
    ],
    sku: 'RIVO-CRG-OLV-002',
  },
  'minimalist-watch': {
    id: 'prod-3',
    slug: 'minimalist-watch',
    name: 'Minimalist Leather Watch',
    price: 599000,
    originalPrice: 799000,
    badge: 'Sale',
    category: 'Accessories',
    description:
      'A refined minimalist timepiece that pairs a clean dial with premium Italian leather strap. Japanese quartz movement ensures precision, while the 40mm case sits comfortably on any wrist. Water-resistant to 30 meters.',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=1000&fit=crop',
    ],
    sizes: ['One Size'],
    colors: [
      { id: 'black', name: 'Black', hex: '#000000' },
      { id: 'brown', name: 'Brown', hex: '#8B4513' },
      { id: 'tan', name: 'Tan', hex: '#D2B48C' },
    ],
    details: [
      'Japanese Quartz Movement',
      '40mm Stainless Steel Case',
      'Italian Leather Strap',
      'Mineral Crystal Glass',
      '30m Water Resistance',
      '2-Year Warranty',
    ],
    sku: 'RIVO-WCH-BLK-003',
  },
  'bomber-jacket-olive': {
    id: 'prod-4',
    slug: 'bomber-jacket-olive',
    name: 'Bomber Jacket — Olive',
    price: 549000,
    category: 'Jackets',
    description:
      'Classic MA-1 inspired bomber jacket in muted olive. Crafted from water-resistant nylon shell with quilted satin lining for warmth. Features ribbed collar, cuffs and hem, two front pockets, and an interior zippered pocket.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'olive', name: 'Olive', hex: '#556b2f' },
      { id: 'black', name: 'Black', hex: '#000000' },
    ],
    details: [
      'Water-Resistant Nylon Shell',
      'Quilted Satin Lining',
      'Ribbed Collar, Cuffs & Hem',
      'YKK Front Zipper',
      '3 Pockets (2 Front + 1 Interior)',
      'Regular Fit',
    ],
    sku: 'RIVO-BMB-OLV-004',
  },
  'classic-polo-white': {
    id: 'prod-5',
    slug: 'classic-polo-white',
    name: 'Classic Polo Shirt — White',
    price: 279000,
    badge: 'Best Seller',
    category: 'T-Shirts',
    description:
      'The quintessential polo shirt, elevated with premium piqué cotton and a tailored slim fit. Features a reinforced three-button placket, ribbed collar and cuffs, and a subtle embroidered logo. A wardrobe essential for smart-casual occasions.',
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { id: 'white', name: 'White', hex: '#FFFFFF' },
      { id: 'black', name: 'Black', hex: '#000000' },
      { id: 'navy', name: 'Navy', hex: '#1a1a2e' },
      { id: 'gray', name: 'Heather Grey', hex: '#b0b0b0' },
    ],
    details: [
      '100% Piqué Cotton (200gsm)',
      'Slim Fit',
      '3-Button Placket',
      'Ribbed Collar & Cuffs',
      'Side Vents',
      'Machine Washable',
    ],
    sku: 'RIVO-POL-WHT-005',
  },
  'slim-fit-chinos': {
    id: 'prod-6',
    slug: 'slim-fit-chinos',
    name: 'Slim Fit Chinos — Khaki',
    price: 349000,
    category: 'Pants',
    description:
      'Versatile slim-fit chinos crafted from stretch cotton twill for all-day comfort. Features a mid-rise waist, tapered leg, and clean finish with tonal stitching. The perfect pant for work-to-weekend versatility.',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&h=1000&fit=crop',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { id: 'khaki', name: 'Khaki', hex: '#c3b091' },
      { id: 'navy', name: 'Navy', hex: '#1a1a2e' },
      { id: 'olive', name: 'Olive', hex: '#556b2f' },
      { id: 'black', name: 'Black', hex: '#000000' },
    ],
    details: [
      '98% Cotton, 2% Elastane',
      'Slim Fit, Tapered Leg',
      'Mid-Rise Waist',
      'Tonal Stitching',
      'Button & Zip Closure',
      'Machine Washable',
    ],
    sku: 'RIVO-CHN-KHK-006',
  },
  'canvas-tote-bag': {
    id: 'prod-7',
    slug: 'canvas-tote-bag',
    name: 'Canvas Tote Bag',
    price: 189000,
    originalPrice: 249000,
    badge: 'Sale',
    category: 'Accessories',
    description:
      'A rugged yet refined tote bag made from heavy-duty washed canvas with vegetable-tanned leather handles. Spacious main compartment with interior zip pocket. Perfect for daily commuting or weekend errands.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop',
    ],
    sizes: ['One Size'],
    colors: [
      { id: 'natural', name: 'Natural', hex: '#d2c9a5' },
      { id: 'black', name: 'Black', hex: '#000000' },
    ],
    details: [
      '16oz Washed Canvas',
      'Vegetable-Tanned Leather Handles',
      'Interior Zip Pocket',
      'Reinforced Base',
      'Dimensions: 40 x 38 x 12 cm',
      'Spot Clean Only',
    ],
    sku: 'RIVO-TOT-NAT-007',
  },
  'denim-jacket-blue': {
    id: 'prod-8',
    slug: 'denim-jacket-blue',
    name: 'Denim Jacket — Washed Blue',
    price: 499000,
    category: 'Jackets',
    description:
      'A timeless denim trucker jacket in a perfectly faded medium wash. Made from rigid selvedge denim that ages beautifully. Features classic button front, chest pockets, and adjustable waist tabs for a tailored look.',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'washed-blue', name: 'Washed Blue', hex: '#6b8fa3' },
      { id: 'dark-indigo', name: 'Dark Indigo', hex: '#1a1a3e' },
    ],
    details: [
      '12oz Rigid Selvedge Denim',
      'Button Front Closure',
      '2 Chest Flap Pockets',
      '2 Side Entry Pockets',
      'Adjustable Waist Tabs',
      'Regular Fit',
    ],
    sku: 'RIVO-DNM-BLU-008',
  },
  'graphic-hoodie-grey': {
    id: 'prod-9',
    slug: 'graphic-hoodie-grey',
    name: 'Graphic Print Hoodie — Grey',
    price: 329000,
    badge: 'New',
    category: 'Hoodies',
    description:
      'A cozy heavyweight hoodie featuring an exclusive screen-printed graphic on the chest. Made from brushed-back fleece cotton for warmth and comfort. Features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { id: 'grey', name: 'Heather Grey', hex: '#b0b0b0' },
      { id: 'black', name: 'Black', hex: '#000000' },
      { id: 'cream', name: 'Cream', hex: '#f5f0e8' },
    ],
    details: [
      '80% Cotton, 20% Polyester (380gsm)',
      'Brushed-Back Fleece',
      'Screen-Printed Graphic',
      'Kangaroo Pocket',
      'Adjustable Drawstring Hood',
      'Relaxed Fit',
    ],
    sku: 'RIVO-HOD-GRY-009',
  },
  'linen-button-up': {
    id: 'prod-10',
    slug: 'linen-button-up',
    name: 'Linen Button-Up Shirt',
    price: 309000,
    originalPrice: 429000,
    badge: 'Sale',
    category: 'Shirts',
    description:
      'A breathable linen shirt perfect for warm weather. Features a relaxed fit, spread collar, and mother-of-pearl buttons. The naturally textured fabric develops a beautiful drape over time.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'white', name: 'White', hex: '#FFFFFF' },
      { id: 'sky', name: 'Sky Blue', hex: '#87CEEB' },
      { id: 'sand', name: 'Sand', hex: '#c2b280' },
    ],
    details: [
      '100% French Linen',
      'Relaxed Fit',
      'Spread Collar',
      'Mother-of-Pearl Buttons',
      'Chest Pocket',
      'Hand Wash Recommended',
    ],
    sku: 'RIVO-LNS-WHT-010',
  },
  'premium-jogger': {
    id: 'prod-11',
    slug: 'premium-jogger',
    name: 'Premium Jogger Pants',
    price: 359000,
    category: 'Pants',
    description:
      'Elevated jogger pants made from a soft cotton-modal blend. Features a tapered leg with ribbed cuffs, elastic waist with drawstring, and side pockets. The perfect blend of comfort and style for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', name: 'Black', hex: '#000000' },
      { id: 'gray', name: 'Charcoal', hex: '#404040' },
      { id: 'navy', name: 'Navy', hex: '#1a1a2e' },
    ],
    details: [
      '60% Cotton, 40% Modal',
      'Tapered Fit',
      'Elastic Waist with Drawstring',
      'Ribbed Cuffs',
      'Side Pockets + Back Pocket',
      'Machine Washable',
    ],
    sku: 'RIVO-JGR-BLK-011',
  },
  'leather-belt-black': {
    id: 'prod-12',
    slug: 'leather-belt-black',
    name: 'Leather Belt — Matte Black',
    price: 179000,
    category: 'Accessories',
    description:
      'A sleek matte black belt crafted from full-grain leather with a brushed nickel buckle. The 35mm width is versatile enough for both casual and smart-casual looks. Ages beautifully with wear.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop',
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { id: 'black', name: 'Matte Black', hex: '#1a1a1a' },
      { id: 'brown', name: 'Dark Brown', hex: '#3e2723' },
    ],
    details: [
      'Full-Grain Leather',
      'Brushed Nickel Buckle',
      '35mm Width',
      'Leather Keeper',
      'Gift Box Included',
      'Wipe Clean with Damp Cloth',
    ],
    sku: 'RIVO-BLT-BLK-012',
  },
};

// Helper to get recommended products (same category, excluding current)
export function getRecommendedProducts(currentSlug: string, limit = 4) {
  const current = productDetails[currentSlug];
  if (!current) return [];

  const allSlugs = Object.keys(productDetails);
  const sameCat = allSlugs
    .filter((s) => s !== currentSlug && productDetails[s].category === current.category)
    .map((s) => productDetails[s]);

  const others = allSlugs
    .filter((s) => s !== currentSlug && productDetails[s].category !== current.category)
    .map((s) => productDetails[s]);

  return [...sameCat, ...others].slice(0, limit);
}
