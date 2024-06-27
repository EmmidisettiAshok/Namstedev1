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
    <div className="header1">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online : {onlineStatus ? "true" : "false" } </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
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
