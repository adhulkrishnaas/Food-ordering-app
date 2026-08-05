import RestaurantCard, { withVegLabel } from "./RestrauntCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestrauntList from "../../utils/useRestrauntList";
import OfferBanner from "./OfferBanner";

// Higher-Order Component instantiated outside render to avoid unnecessary re-creation
const RestrauntCardVeg = withVegLabel(RestaurantCard);

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [isTopRatedActive, setIsTopRatedActive] = useState(false);

  const { restrauntLists, filteredRestraunts, setFilteredRestraunts } =
    useRestrauntList();

  // Search filter handler
  const handleSearch = () => {
    const filtered = restrauntLists.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestraunts(filtered);
  };

  // Top rated filter handler
  const handleTopRated = () => {
    if (isTopRatedActive) {
      // Toggle off -> reset to full list
      setFilteredRestraunts(restrauntLists);
      setIsTopRatedActive(false);
    } else {
      // Toggle on -> filter rating >= 4.2
      const topRated = restrauntLists.filter(
        (res) => (res?.info?.avgRating || 0) >= 4.2,
      );
      setFilteredRestraunts(topRated);
      setIsTopRatedActive(true);
    }
  };

  // Render shimmer loader during initial API fetch
  if (!restrauntLists || restrauntLists.length === 0) {
    return <Shimmer />;
  }

  return (
    <main className="min-h-[85vh] bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <OfferBanner />
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Controls Section: Search Bar & Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Bar Input & Action */}
          <div className="flex items-center w-full sm:w-auto flex-1 max-w-md space-x-2">
            <div className="relative w-full">
              <input
                type="text"
                data-testid="searchInput"
                placeholder="Search restaurants or cuisines..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm transition-all duration-150 active:scale-95 whitespace-nowrap"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={handleTopRated}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all duration-150 flex items-center space-x-1.5 ${
                isTopRatedActive
                  ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span>★</span>
              <span>Top Rated (4.2+)</span>
            </button>

            {(searchText || isTopRatedActive) && (
              <button
                onClick={() => {
                  setSearchText("");
                  setIsTopRatedActive(false);
                  setFilteredRestraunts(restrauntLists);
                }}
                className="px-3 py-2.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Empty Search Results Boundary */}
        {filteredRestraunts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center max-w-md mx-auto my-12">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No restaurants found
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search criteria or clear active filters.
            </p>
            <button
              onClick={() => {
                setSearchText("");
                setIsTopRatedActive(false);
                setFilteredRestraunts(restrauntLists);
              }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-indigo-600 transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          /* Main Responsive Restaurant Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {filteredRestraunts.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
                className="block group transition-transform duration-200 hover:-translate-y-1"
              >
                {restaurant?.info?.veg ? (
                  <RestrauntCardVeg resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Body;
