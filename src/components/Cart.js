import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate order metrics assuming items contain price or defaultPrice in paise/cents
  const subtotal = cartItems.reduce((acc, item) => {
    const price =
      item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
    return acc + price / 100;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const platformFee = subtotal > 0 ? 0.99 : 0;
  const grandTotal = subtotal + deliveryFee + platformFee;

  return (
    <div className="min-h-[85vh] bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Title & Clear Cart CTA */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Your Order Cart
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
              selected
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200/60 rounded-lg transition-all duration-150 active:scale-95 flex items-center space-x-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🛒
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Your cart is empty
            </h2>
            <p className="text-sm text-slate-500 mt-2 mb-6">
              Looks like you haven't added any delicious meals to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm transition-all active:scale-95"
            >
              Explore Restaurants
            </Link>
          </div>
        ) : (
          /* Main Cart Content Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Item List */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <ItemList items={cartItems} />
            </div>

            {/* Right Column: Bill Details & Checkout */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24 space-y-6">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Item Subtotal</span>
                    <span className="font-medium text-slate-900">
                      £{subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Delivery Fee</span>
                    <span className="font-medium text-slate-900">
                      £{deliveryFee.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Platform Fee</span>
                    <span className="font-medium text-slate-900">
                      £{platformFee.toFixed(2)}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-base font-extrabold text-slate-900">
                    <span>To Pay</span>
                    <span className="text-indigo-600">
                      £{grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => alert("Proceeding to payment gateway...")}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow transition-all duration-150 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <p className="text-xs text-center text-slate-400">
                  🔒 Safe & Secure Checkout Guaranteed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
