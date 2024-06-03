import { CDN_URL } from "../utils/constants.js";
const styleCard = {
    backgroundColor: "#f1f1f1",
  };
const RestaurantCard = (props) => {
  //console.log(props.restaruantObj);
  const { name, cloudinaryImageId, cuisines, locality, avgRatingString } =
    props.restaruantObj.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt-tab="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRatingString}</h6>
    </div>
  );
};

export default RestaurantCard;
