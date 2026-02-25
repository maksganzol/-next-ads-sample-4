export interface ProductItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  imageUrl: string;
}

export const featuredProduct: ProductItem = {
  id: 1,
  title: "MacBook Air M3 15\" — Power Meets Portability",
  description: "The all-new MacBook Air with M3 chip delivers incredible performance in an ultra-thin design. Up to 18 hours of battery life, stunning Liquid Retina display.",
  category: "Electronics",
  price: 1299,
  oldPrice: 1499,
  discount: 13,
  rating: 4.9,
  imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
};

export const productList: ProductItem[] = [
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery, and premium comfort for all-day listening.",
    category: "Electronics",
    price: 348,
    oldPrice: 399,
    discount: 13,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Nike Air Max 270 Running Shoes",
    description: "Iconic Air Max cushioning meets modern style. Lightweight and comfortable for everyday wear.",
    category: "Fashion",
    price: 150,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Dyson V15 Detect Cordless Vacuum",
    description: "Laser dust detection, powerful suction, and up to 60 minutes of runtime. The smartest way to clean.",
    category: "Home & Garden",
    price: 649,
    oldPrice: 749,
    discount: 13,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Garmin Forerunner 265 GPS Running Watch",
    description: "Vibrant AMOLED display, advanced running analytics, and up to 13 days of battery life.",
    category: "Sports",
    price: 449,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    title: "La Roche-Posay Effaclar Skincare Set",
    description: "Complete skincare routine for blemish-prone skin: cleansing gel, serum, and SPF moisturizer.",
    category: "Beauty",
    price: 52,
    oldPrice: 68,
    discount: 24,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Kindle Paperwhite 2024 E-Reader",
    description: "New 7\" glare-free display with adjustable warm light and 16 GB storage. Weeks of reading per charge.",
    category: "Books",
    price: 149,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Samsung Galaxy S24 Ultra Smartphone",
    description: "Titanium frame, 200MP camera, S Pen, and Galaxy AI. The phone that sets the standard.",
    category: "Electronics",
    price: 1199,
    oldPrice: 1299,
    discount: 8,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    title: "IKEA KALLAX Shelf Unit 4x4",
    description: "Versatile 4x4 shelving unit. Perfect for books, decor, and organizing any space.",
    category: "Home & Garden",
    price: 99,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
  },
];

export const categories = [
  { id: 1, name: "Electronics", icon: "Smartphone" },
  { id: 2, name: "Fashion", icon: "Shirt" },
  { id: 3, name: "Home & Garden", icon: "Home" },
  { id: 4, name: "Sports", icon: "Dumbbell" },
  { id: 5, name: "Beauty", icon: "Sparkles" },
  { id: 6, name: "Books", icon: "BookOpen" },
];
