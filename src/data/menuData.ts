import { MenuItem, CategoryInfo, ReviewItem } from '../types';

export const CATEGORY_PANELS: CategoryInfo[] = [
  {
    id: 'burgers',
    name: 'BURGERS',
    image: '/assets/aistudio/4538a999-685e-48be-82dc-75297f24f57e_4d81bce3.png',
    note: 'Fresh toasted buns with savory fillings',
  },
  {
    id: 'sandwiches',
    name: 'SANDWICHES',
    image: '/assets/aistudio/61d7a797-bcb2-45a7-82e3-ec766cb5fb7b_77ce31a7.png',
    note: 'Golden grilled with visible grill marks',
  },
  {
    id: 'pizza',
    name: 'PIZZA',
    image: '/assets/images/pizza_margherita_cafe_1793094238848.jpg',
    note: 'Hand-stretched with melted mozzarella',
  },
  {
    id: 'maggi',
    name: 'MAGGI',
    image: '/assets/aistudio/c770c925-52cb-4089-aa5e-abe78f770e23_1e4fb119.png',
    note: 'Freshly prepared hot masala noodles',
  },
  {
    id: 'fries',
    name: 'FRIES',
    image: '/assets/images/crispy_french_fries_1793094240139.jpg',
    note: 'Crispy golden fries seasoned to perfection',
  },
  {
    id: 'quick-bites',
    name: 'QUICK BITES',
    image: '/assets/images/crispy_nuggets_spring_rolls_1793094259214.jpg',
    note: 'Crunchy savory snacks and rolls',
  },
  {
    id: 'garlic-bread',
    name: 'GARLIC BREAD',
    image: '/assets/images/cheesy_garlic_bread_1793094241346.jpg',
    note: 'Warm toasted with roasted garlic butter',
  },
  {
    id: 'combos',
    name: 'COMBOS',
    image: '/assets/images/cafe_combos_meal_1793194204702.jpg',
    note: 'Coordinated bites, sips, and sides',
  },
  {
    id: 'hot-coffee',
    name: 'HOT COFFEE',
    image: '/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
    note: 'Freshly pulled artisan espresso and brews',
  },
  {
    id: 'cold-coffee',
    name: 'COLD COFFEE',
    image: '/assets/images/iced_cold_coffee_1793094240523.jpg',
    note: 'Chilled rich coffee with velvety froth',
  },
  {
    id: 'milkshakes',
    name: 'MILKSHAKES',
    image: '/assets/images/milkshake_trio_cafe_1793094257967.jpg',
    note: 'Thick creamy shakes in vintage glasses',
  },
  {
    id: 'cold-drinks',
    name: 'COLD DRINKS',
    image: '/assets/images/refreshing_lemon_cooler_1793094258759.jpg',
    note: 'Chilled sparkling coolers and sodas',
  },
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // BURGERS
  {
    id: 'b-classic',
    name: 'Classic Veg Burger',
    category: 'burgers',
    image: '/assets/aistudio/4538a999-685e-48be-82dc-75297f24f57e_4d81bce3.png',
  },
  {
    id: 'b-cheese',
    name: 'Cheese Burger',
    category: 'burgers',
    image: '/assets/aistudio/4538a999-685e-48be-82dc-75297f24f57e_4d81bce3.png',
  },
  {
    id: 'b-crispy',
    name: 'Crispy Veg Burger',
    category: 'burgers',
    image: '/assets/aistudio/4538a999-685e-48be-82dc-75297f24f57e_4d81bce3.png',
  },

  // SANDWICHES
  {
    id: 's-veg',
    name: 'Veg Grilled Sandwich',
    category: 'sandwiches',
    image: '/assets/aistudio/61d7a797-bcb2-45a7-82e3-ec766cb5fb7b_77ce31a7.png',
  },
  {
    id: 's-cheese',
    name: 'Cheese Grilled Sandwich',
    category: 'sandwiches',
    image: '/assets/aistudio/61d7a797-bcb2-45a7-82e3-ec766cb5fb7b_77ce31a7.png',
  },

  // PIZZA
  {
    id: 'p-margherita',
    name: 'Margherita Pizza',
    category: 'pizza',
    image: '/assets/images/pizza_margherita_cafe_1793094238848.jpg',
  },
  {
    id: 'p-veg',
    name: 'Veg Pizza',
    category: 'pizza',
    image: '/assets/images/pizza_margherita_cafe_1793094238848.jpg',
  },

  // MAGGI
  {
    id: 'm-masala',
    name: 'Masala Maggi',
    category: 'maggi',
    image: '/assets/aistudio/c770c925-52cb-4089-aa5e-abe78f770e23_1e4fb119.png',
  },

  // FRIES
  {
    id: 'f-classic',
    name: 'Classic French Fries',
    category: 'fries',
    image: '/assets/images/crispy_french_fries_1793094240139.jpg',
  },
  {
    id: 'f-peri',
    name: 'Peri Peri Fries',
    category: 'fries',
    image: '/assets/images/crispy_french_fries_1793094240139.jpg',
  },
  {
    id: 'f-cheese',
    name: 'Cheese Fries',
    category: 'fries',
    image: '/assets/images/crispy_french_fries_1793094240139.jpg',
  },

  // QUICK BITES
  {
    id: 'qb-nuggets',
    name: 'Veg Nuggets',
    category: 'quick-bites',
    image: '/assets/images/crispy_nuggets_spring_rolls_1793094259214.jpg',
  },
  {
    id: 'qb-potato',
    name: 'Crispy Potato Bites',
    category: 'quick-bites',
    image: '/assets/images/crispy_nuggets_spring_rolls_1793094259214.jpg',
  },
  {
    id: 'qb-spring',
    name: 'Spring Rolls',
    category: 'quick-bites',
    image: '/assets/images/crispy_nuggets_spring_rolls_1793094259214.jpg',
  },

  // GARLIC BREAD
  {
    id: 'gb-classic',
    name: 'Classic Garlic Bread',
    category: 'garlic-bread',
    image: '/assets/images/cheesy_garlic_bread_1793094241346.jpg',
  },
  {
    id: 'gb-cheese',
    name: 'Cheese Garlic Bread',
    category: 'garlic-bread',
    image: '/assets/images/cheesy_garlic_bread_1793094241346.jpg',
  },

  // COMBOS
  {
    id: 'co-burger-fries',
    name: 'Burger & Fries Combo',
    category: 'combos',
    image: '/assets/images/cafe_combos_meal_1793194204702.jpg',
  },
  {
    id: 'co-sandwich-fries',
    name: 'Sandwich & Fries Combo',
    category: 'combos',
    image: '/assets/images/cafe_combos_meal_1793194204702.jpg',
  },
  {
    id: 'co-coffee-snack',
    name: 'Coffee & Snack Combo',
    category: 'combos',
    image: '/assets/images/cafe_combos_meal_1793194204702.jpg',
  },

  // HOT COFFEE
  {
    id: 'hc-espresso',
    name: 'Espresso',
    category: 'hot-coffee',
    image: '/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
  },
  {
    id: 'hc-cappuccino',
    name: 'Cappuccino',
    category: 'hot-coffee',
    image: '/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
  },
  {
    id: 'hc-latte',
    name: 'Café Latte',
    category: 'hot-coffee',
    image: '/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
  },
  {
    id: 'hc-hot-coffee',
    name: 'Hot Coffee',
    category: 'hot-coffee',
    image: '/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
  },

  // COLD COFFEE
  {
    id: 'cc-classic',
    name: 'Classic Cold Coffee',
    category: 'cold-coffee',
    image: '/assets/images/iced_cold_coffee_1793094240523.jpg',
  },
  {
    id: 'cc-chocolate',
    name: 'Chocolate Cold Coffee',
    category: 'cold-coffee',
    image: '/assets/images/iced_cold_coffee_1793094240523.jpg',
  },
  {
    id: 'cc-iced',
    name: 'Iced Coffee',
    category: 'cold-coffee',
    image: '/assets/images/iced_cold_coffee_1793094240523.jpg',
  },

  // MILKSHAKES
  {
    id: 'ms-chocolate',
    name: 'Chocolate Milkshake',
    category: 'milkshakes',
    image: '/assets/images/milkshake_trio_cafe_1793094257967.jpg',
  },
  {
    id: 'ms-vanilla',
    name: 'Vanilla Milkshake',
    category: 'milkshakes',
    image: '/assets/images/milkshake_trio_cafe_1793094257967.jpg',
  },
  {
    id: 'ms-strawberry',
    name: 'Strawberry Milkshake',
    category: 'milkshakes',
    image: '/assets/images/milkshake_trio_cafe_1793094257967.jpg',
  },

  // COLD DRINKS
  {
    id: 'cd-lemon',
    name: 'Lemon Cooler',
    category: 'cold-drinks',
    image: '/assets/images/refreshing_lemon_cooler_1793094258759.jpg',
  },
  {
    id: 'cd-mojito',
    name: 'Mojito-Style Cooler',
    category: 'cold-drinks',
    image: '/assets/images/refreshing_lemon_cooler_1793094258759.jpg',
  },
  {
    id: 'cd-soft',
    name: 'Soft Drinks',
    category: 'cold-drinks',
    image: '/assets/images/refreshing_lemon_cooler_1793094258759.jpg',
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Ananya Srivastava',
    role: 'IIT Kanpur Scholar & Regular Visitor',
    comment: 'The ambience at Cafeishqq is pure comfort. You can actually sit, read a book or discuss projects without loud intrusive noise. Their Cappuccino is unmatched in Kanpur.',
    rating: 5,
    date: 'October 2026',
    favoriteItem: 'Cappuccino & Grilled Sandwich',
  },
  {
    id: 'r2',
    author: 'Rohan Mehrotra',
    role: 'Civil Lines Resident',
    comment: 'Finally a modern café in Kanpur that understands quality coffee and warm hospitality. The Cheese Burger has the crispiest patty and the espresso is wonderfully smooth.',
    rating: 5,
    date: 'September 2026',
    favoriteItem: 'Cheese Burger',
  },
  {
    id: 'r3',
    author: 'Dr. Priya & Varun Dixit',
    role: 'Weekend Coffee Lovers',
    comment: 'Our favorite weekend date spot. Soft warm amber lighting, vintage jazz playing quietly in the background, and delicious bites. "Sip Slow. Stay Awhile" is truly how you feel here.',
    rating: 5,
    date: 'October 2026',
    favoriteItem: 'Cheese Grilled Sandwich & Cold Coffee',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'g1',
    title: 'The Cozy Seating Nook',
    subtitle: 'Warm amber glow, wooden bookshelves & plush corners',
    image: '/assets/images/cafe_cozy_ambiance_seating_1792994247689.jpg',
    tag: 'Ambiance',
  },
  {
    id: 'g2',
    title: 'Handcrafted Latte Art',
    subtitle: 'Freshly extracted Arabica espresso with silky microfoam',
    image: '/assets/images/cafe_signature_cappuccino_1792994245367.jpg',
    tag: 'Coffee',
  },
  {
    id: 'g3',
    title: 'Gourmet Cheese Burger',
    subtitle: 'Toasted bun with savory patty and melted cheese',
    image: '/assets/aistudio/4538a999-685e-48be-82dc-75297f24f57e_4d81bce3.png',
    tag: 'Food',
  },
  {
    id: 'g4',
    title: 'Golden Grilled Sandwich',
    subtitle: 'Toasted golden with visible grill marks',
    image: '/assets/aistudio/61d7a797-bcb2-45a7-82e3-ec766cb5fb7b_77ce31a7.png',
    tag: 'Food',
  },
  {
    id: 'g5',
    title: 'Main Hall Evening Glow',
    subtitle: 'Where conversations and warm laughter unfold in Kanpur',
    image: '/assets/images/hero_cafeishqq_interior_1792994244346.jpg',
    tag: 'Ambiance',
  },
];
