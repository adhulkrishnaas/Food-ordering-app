import RestaurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [restrauntLists, setRestrauntLists] = useState([]);
  let [filteredRestraunts, setFilteredRestraunts] = useState([]);
  let [searchText, setSearchText] = useState("");

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
    setFilteredRestraunts(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  return restrauntLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="input-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            //
            //
            console.log(searchText);
            setFilteredRestraunts(
              restrauntLists.filter((restraunt) =>
                restraunt.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              ),
            );
            console.log(filteredRestraunts);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestrauntLists(
              restrauntLists.filter((res) => res.info.avgRating >= 4.2),
            );
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunts.map((restraunt) => {
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
