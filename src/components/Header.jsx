import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  let btnName = "Login"; // the normal JS variable cannot able to track the value changes by react, so we are using the useState variable
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header rendered"); // whole header component render when the state variable changes and see the diff b/w two Vitural DOM and update the those changes only

  // if no dependencies array => useEffect is called on every render
  // if dependencies array is empty [] => useEffect is called on initial render(just once)
  // if dependencies array [btnNameReact]=> called everytime btnNameReact is updated

  useEffect(() => {
    console.log("useEffect() called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact); //fun
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
