import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  //onst loginBtn = "Login";
  const [loginBtn, setLoginBtn] = useState("Login");
  // If there is no dependency array useEffect will render everytime
  //If denpendency array is empty[] => useEffect is called on initial render(just render)
  // If dependency array is [loginBtn] => useEffect is called on everytime "loginBtn" is updated
  useEffect(() => {
    console.log("useEffect render");
  }, [loginBtn]);
  console.log("body render");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between  bg-pink-100 shadow-sm mb-2 sm:bg-yellow-100">
      <div className="w-20">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-2">Online : {onlineStatus ? "true" : "false" } </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <a href="/contact">Contact us</a>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-2"
            onClick={() => {
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
