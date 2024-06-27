import { useState, useEffect } from "react";

import { MENU_API } from "./constants";

const UseRestaruantMenu = (resId) => {
  
  const [resDatainfo, setResDataInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const object = await data.json();
    setResDataInfo(object.data);
  };
  return resDatainfo;
};

export default UseRestaruantMenu;
