import RestaurantCard from "./RestrauntCard";
import resList from "../../utils/mockData";
import resList from "../../utils/mockData";
import { useState } from "react";
const Body = () => {
  let [restrauntLists, setRestrauntLists] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestrauntLists(
              resList.filter((res) => res.card.card.info.avgRating >= 4),
            );
            console.log(restrauntLists);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {restrauntLists.map((restraunt) => (
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
