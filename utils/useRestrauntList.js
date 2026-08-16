import { useEffect, useState } from "react";

const useRestrauntList = () => {
  let [restrauntLists, setRestrauntLists] = useState([]);
  let [filteredRestraunts, setFilteredRestraunts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log(json);

    setRestrauntLists(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
    setFilteredRestraunts(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };

  return {
    restrauntLists,
    setRestrauntLists,
    filteredRestraunts,
    setFilteredRestraunts,
  };
};

export default useRestrauntList;
