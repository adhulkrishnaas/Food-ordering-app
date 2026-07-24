import RestaurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  let [restrauntLists, setRestrauntLists] = useState([]);
  let [filteredRestraunts, setFilteredRestraunts] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log(json);

    setRestrauntLists(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredRestraunts(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
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
            <Link
              key={restraunt?.info?.id}
              to={"restraunts/" + restraunt.info.id}
            >
              <RestaurantCard resData={restraunt} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
