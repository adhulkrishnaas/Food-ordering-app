import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/constants";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log(categories);
  return (
    <div className="text-center my-6 ">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines.join(", ")} - {costForTwo}
      </p>
      {/*Categories Acoordiam*/}
      {categories.map((category) => (
        <RestrauntCategory key={Math.random()} data={category} />
      ))}

      {/*<ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -{item.card.info.price / 100}
            </li>
          );
        })}
      </ul>*/}
    </div>
  );
};

export default RestrauntMenu;
