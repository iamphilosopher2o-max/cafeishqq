import React, { useState, useMemo, useEffect } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { CATEGORY_PANELS, INITIAL_MENU_ITEMS } from '../data/menuData';
import { CAFE_CONFIG } from '../config/cafeConfig';
import { Search, Plus, Check, Edit3, Trash2, RotateCcw, X, SlidersHorizontal, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
  cartItemIds: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onSelectItem,
  cartItemIds,
}) => {
  // Load editable menu items from localStorage or fallback to INITIAL_MENU_ITEMS
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem('cafeishqq_menu_items');
      if (saved) {
        const parsed: MenuItem[] = JSON.parse(saved);
        return parsed.map((item) => {
          const cat = CATEGORY_PANELS.find((c) => c.id === item.category);
          if (cat && (!item.image || item.image.includes('cafe_gourmet_burger') || item.image.includes('cafe_grilled_sandwich') || item.image.includes('masala_maggi'))) {
            return { ...item, image: cat.image };
          }
          return item;
        });
      }
    } catch {
      // fallback
    }
    return INITIAL_MENU_ITEMS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<MenuCategory | 'all'>('all');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // New item form state for editor
  const [newItemName, setNewItemName] = useState('');
  const [newItemCat, setNewItemCat] = useState<MenuCategory>('burgers');
  const [newItemPrice, setNewItemPrice] = useState<string>('');

  // Persist edits to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cafeishqq_menu_items', JSON.stringify(menuItems));
    } catch (e) {
      console.error('Failed to save menu items', e);
    }
  }, [menuItems]);

  const handleResetMenu = () => {
    if (window.confirm('Reset all menu categories and items to default list?')) {
      setMenuItems(INITIAL_MENU_ITEMS);
      localStorage.removeItem('cafeishqq_menu_items');
    }
  };

  const handleRemoveItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const parsedPrice = newItemPrice.trim() ? parseFloat(newItemPrice) : undefined;
    const catInfo = CATEGORY_PANELS.find((c) => c.id === newItemCat);

    const newItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: newItemName.trim(),
      category: newItemCat,
      price: parsedPrice && !isNaN(parsedPrice) ? parsedPrice : undefined,
      image: catInfo?.image,
    };

    setMenuItems((prev) => [...prev, newItem]);
    setNewItemName('');
    setNewItemPrice('');
  };

  const handleAddWithFeedback = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  // Group items by category panel
  const categoriesToRender = useMemo(() => {
    return CATEGORY_PANELS.filter((cat) => {
      if (selectedCategoryFilter !== 'all' && cat.id !== selectedCategoryFilter) {
        return false;
      }
      return true;
    });
  }, [selectedCategoryFilter]);

  // Quick filter categories
  const filterTabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'maggi', label: 'Maggi' },
    { id: 'fries', label: 'Fries' },
    { id: 'quick-bites', label: 'Quick Bites' },
    { id: 'garlic-bread', label: 'Garlic Bread' },
    { id: 'combos', label: 'Combos' },
    { id: 'hot-coffee', label: 'Hot Coffee' },
    { id: 'cold-coffee', label: 'Cold Coffee' },
    { id: 'milkshakes', label: 'Milkshakes' },
    { id: 'cold-drinks', label: 'Cold Drinks' },
  ];

  return (
    <section id="menu" className="py-24 bg-[#F6F0E6] text-[#2B1D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C6A16B]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A16B]">
              {CAFE_CONFIG.brandName.toUpperCase()}
            </span>
            <span className="w-8 h-[1px] bg-[#C6A16B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1B120F] tracking-tight mb-4">
            Our Menu
          </h2>

          <p className="text-base sm:text-lg text-[#2B1D18]/85 leading-relaxed font-serif italic max-w-xl mx-auto">
            "Good food, comforting coffee, and little moments worth slowing down for."
          </p>

          {/* Vintage Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-16 sm:w-28 h-[1px] bg-[#2B1D18]/25" />
            <span className="text-[#C6A16B] text-xs">❖</span>
            <div className="w-16 sm:w-28 h-[1px] bg-[#2B1D18]/25" />
          </div>
        </div>

        {/* Toolbar: Search, Filters & Management */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B1D18]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, panini, brews, shakes..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 border border-[#2B1D18]/20 rounded-lg text-sm text-[#1B120F] placeholder-[#2B1D18]/45 focus:outline-none focus:border-[#C6A16B] focus:ring-1 focus:ring-[#C6A16B] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2B1D18]/60 hover:text-[#1B120F]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Menu Manager Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditorOpen(true)}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1B120F] bg-[#EDE2D0] hover:bg-[#dfcaa5] border border-[#2B1D18]/20 rounded-lg flex items-center gap-2 transition-colors shrink-0 shadow-xs cursor-pointer"
              title="Add or remove dishes from this menu"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A16B]" />
              <span>Manage Menu ({menuItems.length})</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = selectedCategoryFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategoryFilter(tab.id as MenuCategory | 'all')}
                className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#2B1D18] text-[#F6F0E6] shadow-sm'
                    : 'bg-white/80 text-[#2B1D18]/80 hover:bg-white hover:text-[#1B120F] border border-[#EDE2D0]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Vintage Multi-Panel Menu Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {categoriesToRender.map((cat) => {
            const itemsInCat = menuItems.filter(
              (item) =>
                item.category === cat.id &&
                (searchQuery === '' ||
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            // Hide empty category if searching and no matches
            if (itemsInCat.length === 0 && searchQuery) {
              return null;
            }

            return (
              <div
                key={cat.id}
                className="relative bg-[#FFFDF9] rounded-xl border-2 border-[#2B1D18] shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Inner Vintage Hairline Border */}
                <div className="absolute inset-1.5 border border-[#C6A16B]/30 rounded-lg pointer-events-none" />

                {/* Decorative Panel Header */}
                <div className="relative text-center pb-4 mb-5 border-b border-[#2B1D18]/15">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[#C6A16B] text-[10px]">♦</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] uppercase text-[#1B120F]">
                      {cat.name}
                    </h3>
                    <span className="text-[#C6A16B] text-[10px]">♦</span>
                  </div>
                  {cat.note && (
                    <p className="text-[11px] font-sans text-[#2B1D18]/65 italic mt-1">
                      {cat.note}
                    </p>
                  )}
                </div>

                {/* Multi-Panel Content Layout: Compact Food Photography + Aligned Menu Items */}
                <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch flex-1">
                  
                  {/* Compact Realistic Food Photography on One Side */}
                  <div className="sm:col-span-5 relative">
                    <div className="relative h-48 sm:h-full w-full min-h-[170px] rounded-lg overflow-hidden border border-[#2B1D18]/25 bg-[#2B1D18]/10 group">
                      <img
                        src={cat.image}
                        alt={`${cat.name} at Cafeishqq Café`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                      />
                      {/* Subtle Vignette Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B120F]/50 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center">
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-[#EDE2D0] bg-[#1B120F]/85 backdrop-blur-xs px-2.5 py-1 rounded">
                          <Sparkles className="w-3 h-3 text-[#C6A16B]" />
                          Freshly Prepared
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items List on the Other Side */}
                  <div className="sm:col-span-7 flex flex-col justify-between space-y-3">
                    <div className="space-y-2.5">
                      {itemsInCat.length === 0 ? (
                        <p className="text-xs text-[#2B1D18]/60 italic py-4">
                          No items in this category. Click "Manage Menu" to add items.
                        </p>
                      ) : (
                        itemsInCat.map((item) => {
                          const inTrayCount = cartItemIds[item.id] || 0;
                          const isJustAdded = justAddedId === item.id;

                          return (
                            <div
                              key={item.id}
                              onClick={() => onSelectItem(item)}
                              className="group/item flex items-center justify-between gap-3 p-2 rounded-md hover:bg-[#F6F0E6] transition-colors cursor-pointer border-b border-[#2B1D18]/5 last:border-b-0"
                            >
                              <div className="flex-1 min-w-0 pr-1">
                                <div className="flex items-baseline gap-2">
                                  <span className="font-serif text-sm sm:text-base font-bold text-[#1B120F] group-hover/item:text-[#C6A16B] transition-colors">
                                    {item.name}
                                  </span>
                                </div>
                                {item.description && (
                                  <p className="text-[11px] text-[#2B1D18]/70 line-clamp-1 mt-0.5">
                                    {item.description}
                                  </p>
                                )}
                              </div>

                              {/* Clean, Unobtrusive Area for Prices (ONLY when configured) */}
                              <div className="flex items-center gap-2 shrink-0">
                                {typeof item.price === 'number' ? (
                                  <span className="font-mono text-sm font-bold text-[#1B120F] tabular-nums">
                                    ₹{item.price}
                                  </span>
                                ) : (
                                  <span className="text-[11px] text-[#C6A16B] font-medium hidden sm:inline">
                                    Available
                                  </span>
                                )}

                                {/* Quick Add to Order Tray button */}
                                <button
                                  onClick={(e) => handleAddWithFeedback(e, item)}
                                  className={`p-1.5 rounded transition-all cursor-pointer ${
                                    isJustAdded
                                      ? 'bg-emerald-700 text-white'
                                      : inTrayCount > 0
                                      ? 'bg-[#2B1D18] text-[#F6F0E6]'
                                      : 'bg-[#C6A16B]/20 text-[#1B120F] hover:bg-[#C6A16B] hover:text-[#1B120F]'
                                  }`}
                                  title="Add to tray"
                                  aria-label={`Add ${item.name} to tray`}
                                >
                                  {isJustAdded ? (
                                    <Check className="w-3.5 h-3.5" />
                                  ) : (
                                    <Plus className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Subtle footer tip for category */}
                    <div className="pt-2 border-t border-[#C6A16B]/20 flex items-center justify-between text-[10px] text-[#2B1D18]/50">
                      <span>{CAFE_CONFIG.brandName} Kitchen</span>
                      <span className="text-[#C6A16B]">✦</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Vintage Bottom Brand Stamp */}
        <div className="mt-16 text-center">
          <div className="inline-block px-7 py-4 rounded-xl border border-[#2B1D18]/20 bg-white/70 shadow-xs">
            <p className="font-serif text-sm font-bold text-[#1B120F]">
              {CAFE_CONFIG.brandName} · {CAFE_CONFIG.city}, {CAFE_CONFIG.state}
            </p>
            <p className="font-serif italic text-xs text-[#C6A16B] mt-0.5">
              "{CAFE_CONFIG.tagline}"
            </p>
          </div>
        </div>

      </div>

      {/* Slide-over / Modal for Menu Editor */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="bg-[#F6F0E6] text-[#2B1D18] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border-2 border-[#2B1D18] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 bg-[#2B1D18] text-[#F6F0E6] flex items-center justify-between border-b border-[#C6A16B]/30">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#C6A16B]" />
                <div>
                  <h3 className="font-serif text-lg font-bold">Manage Menu Items</h3>
                  <p className="text-xs text-[#EDE2D0]/70">
                    Add new products, set optional prices, or remove items.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Add New Item Form */}
              <form onSubmit={handleAddNewItem} className="bg-white p-4 rounded-lg border border-[#EDE2D0] space-y-3">
                <h4 className="font-serif font-bold text-sm text-[#1B120F]">Add New Menu Item</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-[#2B1D18]/70 mb-1">
                      Dish Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Masala Corn Toastie"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-[#F6F0E6] border border-[#EDE2D0] rounded focus:outline-none focus:border-[#C6A16B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#2B1D18]/70 mb-1">
                      Price (₹ Optional)
                    </label>
                    <input
                      type="number"
                      placeholder="Leave blank if unpriced"
                      value={newItemPrice}
                      onChange={(e) => setNewItemPrice(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-[#F6F0E6] border border-[#EDE2D0] rounded focus:outline-none focus:border-[#C6A16B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-[#2B1D18]/70 mb-1">
                      Select Category
                    </label>
                    <select
                      value={newItemCat}
                      onChange={(e) => setNewItemCat(e.target.value as MenuCategory)}
                      className="w-full px-3 py-1.5 text-xs bg-[#F6F0E6] border border-[#EDE2D0] rounded focus:outline-none focus:border-[#C6A16B]"
                    >
                      {CATEGORY_PANELS.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-[#2B1D18] hover:bg-[#1B120F] text-[#F6F0E6] text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    + Add Item
                  </button>
                </div>
              </form>

              {/* Current Items List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#2B1D18]/15">
                  <h4 className="font-serif font-bold text-sm text-[#1B120F]">
                    Configured Menu Items ({menuItems.length})
                  </h4>
                  <button
                    onClick={handleResetMenu}
                    className="text-xs text-[#C6A16B] hover:text-[#2B1D18] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Defaults</span>
                  </button>
                </div>

                <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1">
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 bg-white rounded border border-[#EDE2D0] text-xs"
                    >
                      <div>
                        <strong className="text-[#1B120F]">{item.name}</strong>
                        <span className="text-[#2B1D18]/50 ml-2 uppercase text-[10px]">
                          ({item.category})
                        </span>
                        {typeof item.price === 'number' && (
                          <span className="font-mono text-[#C6A16B] ml-2 font-bold">
                            ₹{item.price}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => handleRemoveItem(item.id, e)}
                        className="p-1 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                        title="Remove product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-[#EDE2D0] flex justify-end">
              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-5 py-2 bg-[#2B1D18] text-[#F6F0E6] text-xs font-semibold rounded uppercase tracking-wider hover:bg-[#1B120F] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
