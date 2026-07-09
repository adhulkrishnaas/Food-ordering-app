import RestaurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [restrauntLists, setRestrauntLists] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setRestrauntLists(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  if (restrauntLists.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestrauntLists(
              restrauntLists.filter((res) => res.info.avgRating >= 5),
            );
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {restrauntLists.map((restraunt) => {
          return (
            <RestaurantCard
              key={restraunt?.card?.card?.info?.id || restraunt?.info?.id}
              resData={restraunt}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
