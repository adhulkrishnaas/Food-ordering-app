import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info || {};
  const { deliveryTime } = resData.info.sla;

  return (
    <div className=" m-4 p-4 w-88 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className=" h-58 overflow-hidden rounded-x">
        <img
          className="w-full h-full object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <h3 className="font-bold text-xl mt-4 mb-2 text-gray-800 line-clamp-1">
        {name}
      </h3>
      <h4 className="text-sm text-gray-500 mb-1 line-clamp-1">
        {cuisines?.join(", ")}
      </h4>

      <div className="flex justify-between items-center mt-3 text-sm font-semibold text-gray-700">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">
          {" "}
          ⭐ {avgRating}
        </span>
        <span>{deliveryTime + "minutes"}</span>
      </div>
    </div>
  );
};
export default RestaurantCard;
