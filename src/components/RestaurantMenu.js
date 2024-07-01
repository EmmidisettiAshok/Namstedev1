
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UseRestaruantMenu from "../utils/useRestaruantMenu";

const RestaurantMenu = () => {
 
  const { resId } = useParams();
  console.log(resId);
  const resDatainfo = UseRestaruantMenu(resId);
  // 618654
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const object = await data.json();

  //   console.log(object.data.cards[2].card.card.info.name);
  //   console.log(object.data);
  //   setResDataInfo(object.data);
  //   //console.log("new array"+resInfo);
  // };
  if (resDatainfo === null) return <Shimmer />;
  console.log( resDatainfo?.cards[2]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    resDatainfo?.cards[2]?.card?.card?.info;

    console.log(resDatainfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  
  const { itemCards } =
    resDatainfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // if(itemCards === null) return <Shimmer/> ;
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h3>Menu</h3>

      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs."}
            {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
