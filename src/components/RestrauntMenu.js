import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Safely extract restaurant header metadata with fallbacks
  const infoCard =
    resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info ||
    resInfo?.cards[2]?.card?.card?.info ||
    resInfo?.cards[0]?.card?.card?.info;

  const {
    name = "Restaurant Menu",
    cuisines = [],
    costForTwoMessage = "",
    avgRating = null,
    totalRatingsString = "",
    areaName = "",
    sla = {},
  } = infoCard || {};

  // Extract menu category accordions safely
  const regularCards =
    resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];

  const categories = regularCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return (
    <div className="min-h-[85vh] bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Restaurant Header Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {name}
            </h1>

            <p className="text-sm font-medium text-slate-600">
              {cuisines.join(", ")}
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-500 pt-1">
              {areaName && <span>📍 {areaName}</span>}
              {sla?.slaString && <span>• 🚴 {sla.slaString}</span>}
            </div>
          </div>

          {/* Rating Badge */}
          {avgRating && (
            <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl p-3 text-center min-w-[90px] self-start sm:self-auto">
              <div className="flex items-center justify-center space-x-1 text-emerald-700 font-extrabold text-base">
                <span>★</span>
                <span>{avgRating}</span>
              </div>
              <p className="text-[10px] font-medium text-emerald-600 mt-0.5 border-t border-emerald-200/60 pt-1">
                {totalRatingsString || "Ratings"}
              </p>
            </div>
          )}
        </div>

        {/* Categories Accordions Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Menu Categories ({categories.length})
            </h2>
          </div>

          {categories.map((category) => (
            <RestrauntCategory
              key={category?.card?.card?.title || Math.random()}
              data={category}
              showItems={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
