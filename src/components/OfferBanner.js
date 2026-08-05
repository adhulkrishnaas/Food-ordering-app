import React, { useState, useEffect } from "react";

const OFFERS = [
  {
    id: 1,
    title: "50% OFF UP TO £10",
    code: "WELCOME50",
    description: "On your first 3 food delivery orders",
    bgGradient: "from-amber-500 via-rose-500 to-pink-600",
    badge: "Limited Time ⚡",
    icon: "🍔",
  },
  {
    id: 2,
    title: "FREE DELIVERY",
    code: "FREESHIP",
    description: "On all orders above £15 this weekend",
    bgGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    badge: "Weekend Special 🎉",
    icon: "🚀",
  },
  {
    id: 3,
    title: "FLAT £5 CASHBACK",
    code: "GOURMET5",
    description: "Valid on top-rated premium restaurants",
    bgGradient: "from-indigo-600 via-purple-600 to-pink-500",
    badge: "Exclusive 👑",
    icon: "🍕",
  },
];

const OfferBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState("");

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const current = OFFERS[currentIndex];

  return (
    <div className="w-full my-6">
      {/* Main Promo Card */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${current.bgGradient} p-6 sm:p-8 text-white shadow-xl transition-all duration-700 ease-in-out`}
      >
        {/* Decorative Floating Background Element */}
        <div className="absolute -right-6 -bottom-8 text-8xl sm:text-9xl opacity-20 select-none pointer-events-none transform -rotate-12">
          {current.icon}
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-extrabold rounded-full uppercase tracking-wider">
              {current.badge}
            </span>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-none">
              {current.title}
            </h2>

            <p className="text-white/90 text-xs sm:text-sm font-medium">
              {current.description}
            </p>
          </div>

          {/* Copy Voucher Action */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-white/70 tracking-wider">
                Voucher Code
              </p>
              <p className="font-mono font-extrabold text-sm sm:text-base tracking-widest text-white">
                {current.code}
              </p>
            </div>

            <button
              onClick={() => handleCopyCode(current.code)}
              className="px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 active:scale-95 text-xs font-bold rounded-xl shadow-md transition-all uppercase tracking-wide"
            >
              {copiedCode === current.code ? "Copied! ✓" : "Copy Code"}
            </button>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          {OFFERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
