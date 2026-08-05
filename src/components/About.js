import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[85vh] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-8 sm:p-12 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-indigo-500/30">
              Hot & Fresh To Your Door
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Connecting you with the best local restaurants in town.
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              We bring your favorite neighborhood kitchens, top-rated eateries,
              and hidden culinary gems straight to your doorstep—fast, reliable,
              and always piping hot.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-150 shadow-sm"
              >
                Explore Restaurants
              </Link>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
              🚀
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Lightning Fast Delivery
            </h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Real-time order tracking and optimized routing ensure your meal
              arrives warm, fresh, and strictly on schedule.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
              🍔
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Curated Local Menus
            </h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              From gourmet burgers and authentic pizzas to healthy bowls and
              desserts, discover thousands of dishes tailored to your cravings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
              💳
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Seamless Checkout
            </h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Effortless state management keeps your cart updated in real-time
              with transparent pricing and no hidden fees.
            </p>
          </div>
        </div>

        {/* Brand Promise Section */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Our Food Quality Guarantee
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Food delivery should never mean compromising on quality. We
              partner exclusively with restaurants that maintain strict hygiene
              protocols and exceptional cooking standards.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>Verified high hygiene rating restaurant partners</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>Temperature-controlled eco-friendly packaging</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>Live order status tracking from kitchen to door</span>
              </li>
            </ul>
          </div>

          {/* Customer Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-3xl font-extrabold text-indigo-600">
                500+
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1 block">
                Restaurant Partners
              </span>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-3xl font-extrabold text-emerald-600">
                30 Min
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1 block">
                Average Delivery Time
              </span>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-3xl font-extrabold text-emerald-600">
                4.8★
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1 block">
                Customer Rating
              </span>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl text-center border border-slate-100">
              <span className="block text-3xl font-extrabold text-indigo-600">
                24/7
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1 block">
                Customer Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
