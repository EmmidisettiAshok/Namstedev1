import { CDN_URL } from "../utils/constants.js";
const styleCard = {
    backgroundColor: "#f1f1f1",
  };
const RestaurantCard = (props) => {
  //console.log(props.restaruantObj);
  const { name, cloudinaryImageId, cuisines, locality, avgRatingString } =
    props.restaruantObj.info;
  return (
    <div className="m-2 p-2 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt-tab="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRatingString}</h6>
    </div>
  );
};

export default RestaurantCard;
