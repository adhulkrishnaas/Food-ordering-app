import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, deliveryTime, avgRating } =
    resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{"Rating: " + avgRating}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime + "minutes"}</h4>
    </div>
  );
};
export default RestaurantCard;
