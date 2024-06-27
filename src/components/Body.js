import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  let [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("useEffect method");
    fetchData();
  }, []);

  // whenever state variable update, react triggers a recounciliation cycle(rerender the component)
  console.log("outside body method");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=16.96160&lng=82.23260&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData?.data);
    setListOfRestaurants(
      jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterListOfRestaurants(
      jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      "updated response ==== " +
        jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle
    );
  };

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();

  //   // Optional Chaining
  //   setListOfRestraunt(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };
  const online = useOnlineStatus();
  console.log("status is : "+online);
  if (online === false) return <h1>Looks like your internet is off</h1>;
  if (listOfRestaurants === null) {
    return <Shimmer />;
  }
  //listOfRestaurants.length === 0 ? <Shimmer/> :
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input-search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const searchList = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("length is : " + searchList.length);
              setFilterListOfRestaurants(searchList);

              console.log("Button onClicked");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter_btn"
          onClick={() => {
            const fitleredRestaurants = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterListOfRestaurants(fitleredRestaurants);

            console.log("Button onClicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterListOfRestaurants?.map((restaruant) => (
          <Link
            to={"/restaurant/" + restaruant?.info?.id}
            key={restaruant?.info?.id}
          >
            <RestaurantCard restaruantObj={restaruant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
