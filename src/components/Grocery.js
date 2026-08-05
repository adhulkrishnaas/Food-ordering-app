import React, { useState } from "react";

// --- CHILD COMPONENT 1: Feature Badge Bar ---
const FeatureBadges = () => {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "10-Min Delivery",
      desc: "Straight to your door",
    },
    {
      id: 2,
      icon: "🌱",
      title: "100% Organic",
      desc: "Farm-fresh daily harvest",
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Quality Guarantee",
      desc: "Easy refund policy",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {features.map((f) => (
        <div
          key={f.id}
          className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
        >
          <div className="w-12 h-12 flex items-center justify-center text-2xl bg-emerald-50 text-emerald-600 rounded-xl flex-shrink-0">
            {f.icon}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">{f.title}</h4>
            <p className="text-xs text-slate-500">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- CHILD COMPONENT 2: Grocery Item Card ---
const ItemCard = ({ item }) => {
  const { name, weight, price, originalPrice, image, tag } = item;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div className="relative w-full h-36 rounded-xl bg-slate-50 overflow-hidden mb-3 flex items-center justify-center">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {image}
        </span>
        {tag && (
          <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md shadow-sm">
            {tag}
          </span>
        )}
      </div>

      <div>
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          {weight}
        </p>
        <h3 className="font-bold text-slate-800 text-base line-clamp-1 mt-0.5">
          {name}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <div>
          <span className="font-extrabold text-slate-900 text-base">
            £{price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-xs text-slate-400 line-through ml-1.5 font-medium">
              £{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="py-1.5 px-3 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs rounded-xl border border-emerald-200/60 transition-colors duration-150 active:scale-95 uppercase tracking-wide">
          Add +
        </button>
      </div>
    </div>
  );
};

// --- DUMMY DATA ---
const CATEGORIES = [
  "All Items",
  "Fresh Produce",
  "Dairy & Eggs",
  "Bakery",
  "Beverages",
];

const GROCERY_ITEMS = [
  {
    id: 101,
    name: "Organic Hass Avocados",
    weight: "2 pcs",
    price: 1.99,
    originalPrice: 2.49,
    category: "Fresh Produce",
    image: "🥑",
    tag: "Fresh",
  },
  {
    id: 102,
    name: "Farm Whole Milk",
    weight: "1 Litre",
    price: 1.25,
    originalPrice: null,
    category: "Dairy & Eggs",
    image: "🥛",
    tag: null,
  },
  {
    id: 103,
    name: "Artisanal Sourdough Bread",
    weight: "400g",
    price: 2.5,
    originalPrice: 2.99,
    category: "Bakery",
    image: "🍞",
    tag: "Bestseller",
  },
  {
    id: 104,
    name: "Fresh Strawberries",
    weight: "250g",
    price: 2.2,
    originalPrice: 2.8,
    category: "Fresh Produce",
    image: "🍓",
    tag: "Organic",
  },
  {
    id: 105,
    name: "Free Range Eggs",
    weight: "6 Pack",
    price: 1.85,
    originalPrice: null,
    category: "Dairy & Eggs",
    image: "🥚",
    tag: null,
  },
  {
    id: 106,
    name: "Cold Pressed Orange Juice",
    weight: "750ml",
    price: 3.1,
    originalPrice: 3.5,
    category: "Beverages",
    image: "🍊",
    tag: "Offer",
  },
];

// --- MAIN PARENT COMPONENT: Grocery ---
const Grocery = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredItems =
    activeCategory === "All Items"
      ? GROCERY_ITEMS
      : GROCERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-[85vh] bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Promotional Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-emerald-900/10">
          <div className="relative z-10 max-w-xl space-y-3">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Grocery Express 🚀
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Fresh Organic Groceries Delivered Fast
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base font-medium">
              Explore local farm produce, dairy, bakery essentials, and everyday
              store needs right at your fingertips.
            </p>
          </div>
          <div className="absolute right-4 -bottom-6 text-9xl opacity-20 pointer-events-none select-none hidden sm:block">
            🥦
          </div>
        </div>

        {/* Feature Highlights Component */}
        <FeatureBadges />

        {/* Category Filters */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Shop by Category
            </h2>
            <span className="text-xs font-semibold text-slate-400">
              Showing {filteredItems.length} items
            </span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grocery Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
