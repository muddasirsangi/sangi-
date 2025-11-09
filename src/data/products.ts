export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  img: string;
  desc: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: 'rocket-toy',
    name: 'Cosmic Rocket',
    price: 29.99,
    img: '/rocket.svg',
    desc: 'A fun rocket toy with water coming out from the bottom.',
    category: 'Toys',
  },
  {
    id: 2,
    slug: 'almira-toy',
    name: 'Peach Almira',
    price: 39.99,
    img: '/almira.svg',
    desc: 'A peach-shaped almira that dispenses chocolate.',
    category: 'Gadgets',
  },
  {
    id: 3,
    slug: 'barbie-doll',
    name: 'Round Barbie',
    price: 19.99,
    img: '/barbie.svg',
    desc: 'A unique, round-shaped Barbie doll.',
    category: 'Dolls',
  },
];