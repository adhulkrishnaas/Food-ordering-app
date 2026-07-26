import React from "react";
import ItemList from "./ItemList";

const RestrauntCategory = (data) => {
  console.log(data);
  const { title, itemCards } = data.data.card.card;
  return (
    <div>
      {/*Accordion Header*/}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/*Accordion Body*/}
      <ItemList items={itemCards} />
    </div>
  );
};

export default RestrauntCategory;
