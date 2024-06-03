import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  //onst loginBtn = "Login";
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header1">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>Cart</li>
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
