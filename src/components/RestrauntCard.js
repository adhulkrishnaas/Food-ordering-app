import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};

  return (
    <div
      data-testid="resCard"
      className="w-full p-3.5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Container with aspect ratio & hover zoom */}
      <div className="relative w-full h-44 overflow-hidden rounded-xl bg-slate-100">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
          onError={(e) => {
            // 1. Prevent infinite loop if fallback image also fails
            e.target.onerror = null;

            // 2. Direct DOM fallback replacement
            e.target.src =
              "https://media-assets.swiggy.com/swiggy/image/upload/FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg";
          }}
        />
      </div>

      {/* Card Info */}
      <div className="pt-3.5 pb-1 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg text-slate-900 tracking-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {name}
          </h3>
          <h4 className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">
            {cuisines?.join(", ")}
          </h4>
        </div>

        {/* Rating and Delivery Badges */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs font-semibold">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200/50">
            <span>⭐</span>
            <span>{avgRating || "N/A"}</span>
          </span>
          <span className="text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
            🕒 {deliveryTime ? `${deliveryTime} mins` : "30 mins"}
          </span>
        </div>
      </div>
    </div>
  );
};

// Higher order component
// input - restraunt ==> restraunt card with veg label
export const withVegLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative group">
      <label className="absolute top-7 left-7 bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md shadow-md z-10 pointer-events-none">
        Veg
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
