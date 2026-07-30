import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-2 my-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span className="font-bold">{item.card.info.name} </span>
              <span className="font-bold">
                {" "}
                - ₹ {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div>
            <button
              onClick={() => {
                handleAddItem(item);
              }}
              className="p-1 mx-5 my-9 bg-black shadow-lg absolute rounded-lg text-xs text-white"
            >
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-20 mr-1.5"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
