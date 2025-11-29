import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Zentrex Apex Ergo",
    price: 599.00,
    category: "Executive",
    image: "/assets/chair-1.png", // Updated to .png
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Zentrex Lumbar Air",
    price: 449.00,
    category: "Task",
    image: "/assets/chair-2.png", // Updated to .png
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Zentrex Pro Mesh",
    price: 399.00,
    category: "Meeting",
    image: "/assets/chair-1.png", 
    tag: "Sale"
  },
  {
    id: 4,
    name: "Zentrex Studio",
    price: 299.00,
    category: "Home Office",
    image: "/assets/chair-2.png", 
    tag: null
  }
];