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
      <div className="filter m-4 p-4 flex items-center">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4.5 py-1.5 mx-1.5 bg-green-100 border-black rounded-lg"
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
          className="px-3 py-1.5 bg-blue-100 rounded-lg"
          onClick={() => {
            setRestrauntLists(
              restrauntLists.filter((res) => res.info.avgRating >= 4.2),
            );
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
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
