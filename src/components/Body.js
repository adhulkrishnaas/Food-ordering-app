import RestaurantCard from "./RestrauntCard";
import resList from "../../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <RestaurantCard
            key={restraunt.card.card.info.id}
            resData={restraunt}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
