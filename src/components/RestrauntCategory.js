import React, { useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = (data) => {
  const [showItems, setShowItems] = useState(false);
  const { title, itemCards } = data.data.card.card;

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-4 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200">
      {/* Accordion Header */}
      <div className="p-5 bg-white hover:bg-slate-50/80 transition-colors">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => {
            handleClick();
          }}
        >
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-900 text-base sm:text-lg">
              {title}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {itemCards ? itemCards.length : 0}
            </span>
          </div>

          <div className="p-1 rounded-full bg-slate-100/80 text-slate-600">
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                showItems ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Accordion Body Content */}
        {showItems ? (
          <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/50 rounded-xl p-2 sm:p-4">
            <ItemList items={itemCards} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RestrauntCategory;
