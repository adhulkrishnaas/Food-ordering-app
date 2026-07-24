import RestaurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestrauntList from "../../utils/useRestrauntList";
const Body = () => {
  let [searchText, setSearchText] = useState("");
  const { restrauntLists, filteredRestraunts, setFilteredRestraunts } =
    useRestrauntList();

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
              className="link-restraunt"
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
