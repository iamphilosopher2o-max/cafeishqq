export type MenuCategory = 
  | 'all'
  | 'burgers'
  | 'sandwiches'
  | 'pizza'
  | 'maggi'
  | 'fries'
  | 'quick-bites'
  | 'garlic-bread'
  | 'combos'
  | 'hot-coffee'
  | 'cold-coffee'
  | 'milkshakes'
  | 'cold-drinks';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  image: string;
  note?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price?: number;
  description?: string;
  isVeg?: boolean;
  image?: string;
  prepTime?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface TableReservation {
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  seatingPreference: 'cozy-corner' | 'window-seat' | 'main-hall' | 'outdoor-patio';
  specialNotes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  favoriteItem: string;
}
