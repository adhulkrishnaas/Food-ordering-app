import React, { use, useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = (data) => {
  const [showItems, setShowItems] = useState(false);
  const { title, itemCards } = data.data.card.card;

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/*Accordion Header*/}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems ? <ItemList items={itemCards} /> : ""}
      </div>
    </div>
  );
};

export default RestrauntCategory;
