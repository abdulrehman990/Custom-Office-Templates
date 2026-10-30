import cat1 from './assets/cat-1.jpg'
import cat2 from './assets/cat-2.jpg'
import cat3 from './assets/cat-3.jpg'
import cat4 from './assets/cat-4.jpg'
import cat5 from './assets/cat-5.jpg'
import p1 from './assets/product-1.jpg'
import p2 from './assets/product-2.jpg'
import p3 from './assets/product-3.jpg'
import p4 from './assets/product-4.jpg'
import p5 from './assets/product-5.jpg'
import av1 from './assets/avatar-1.jpg'
import av2 from './assets/avatar-2.jpg'
import av3 from './assets/avatar-3.jpg'

export const announcements = [
  '✦ Free shipping all over Pakistan',
  '✦ Flat 20% off selected collections',
  '✦ Premium soft cotton towels',
  '✦ Easy returns, hassle free',
  '✦ Fast delivery nationwide',
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#categories', label: 'Collections' },
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export const marqueeWords = ['Bath', 'Hand', 'Face', 'Beach', 'Large', 'Spa', 'Everyday luxury']

export const categories = [
  { name: 'Bath Towels', filter: 'Bath', img: cat1 },
  { name: 'Hand Towels', filter: 'Hand', img: cat2 },
  { name: 'Face Towels', filter: 'Face', img: cat3 },
  { name: 'Beach Towels', filter: 'Beach', img: cat4 },
  { name: 'Large Towels', filter: 'Large', img: cat5 },
]

export const products = [
  { id: 1, name: 'Premium Bath Towel', category: 'Bath', price: 1499, old: 1999, tag: 'Best Seller', tagClass: '', color: 'Pure White', rating: 128, img: p1 },
  { id: 2, name: 'Luxury Bath Towel', category: 'Bath', price: 1299, old: 1800, tag: 'Sale', tagClass: 'sale', color: 'Ocean Blue', rating: 95, img: p2 },
  { id: 3, name: 'Hand Towel Set', category: 'Hand', price: 899, old: 1200, tag: 'New', tagClass: 'new', color: 'Stone Gray', rating: 64, img: p3 },
  { id: 4, name: 'Face Towel Set', category: 'Face', price: 699, old: 899, tag: 'Sale', tagClass: 'sale', color: 'Pastel Mix', rating: 42, img: p4 },
  { id: 5, name: 'Striped Beach Towel', category: 'Beach', price: 1799, old: 2499, tag: 'Best Seller', tagClass: '', color: 'Blue Stripe', rating: 76, img: p5 },
  { id: 6, name: 'Everyday Hand Towel', category: 'Hand', price: 599, old: 799, tag: 'Popular', tagClass: 'new', color: 'Soft Beige', rating: 38, img: p1 },
  { id: 7, name: 'Premium Large Towel', category: 'Large', price: 1999, old: 2699, tag: 'Premium', tagClass: '', color: 'Cloud White', rating: 51, img: p2 },
  { id: 8, name: 'Spa Face Towel Duo', category: 'Face', price: 799, old: 999, tag: 'New', tagClass: 'new', color: 'Spa Gray', rating: 29, img: p3 },
]

export const reviews = [
  { name: 'Ahmad R.', avatar: av1, text: 'Excellent quality towels! Super soft and exactly as shown. Great feel and value for money.' },
  { name: 'Sara K.', avatar: av2, text: "I ordered the bath towels and I'm really impressed. The quality is amazing and delivery was on time." },
  { name: 'Bilal T.', avatar: av3, text: "Best towels I've ever used. Worth every penny. I'll definitely be ordering again." },
]

export const money = (n) => 'Rs. ' + n.toLocaleString('en-PK')
