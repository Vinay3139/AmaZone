import React, { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import Hover from "../Hover/Hover";
import Location from "./Location";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CountContext } from "../Reducer/Context";
// import { propTypes } from "react-bootstrap/esm/Image";
export default function NavBar(props) {
  const { Amount } = useContext(CountContext);

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  function OnEnter() {
    setHover(true);
  }
  function OnOut() {
    setHover(false);
  }
  function OnIn() {
    setClick(true);
  }
  function OnLeave() {
    setClick(false);
  }

  return (
    <div className="Navbar_Media">
      <div className="Navbar">
        <Link to="/">
          <img src="./Images/amazone3" alt="" className="Amazone"></img>
        </Link>
        <Location />
        <Search />
        <div className="English" onMouseOver={OnEnter} onMouseLeave={OnOut}>
          {hover ? (
            <div>
              <h1>{/* <Hover /> */}</h1>

              <p>
                <img src="./Images/india.webp" alt="" className="India"></img>
                <FaCaretDown />
              </p>
            </div>
          ) : (
            <div>
              <img src="/Images/india.webp" alt="" className="India"></img>
              <FaCaretDown />
            </div>
          )}
        </div>
        <div className="List" onMouseOver={OnIn} onMouseLeave={OnLeave}>
          {click ? (
            <div>
              <h1>{/* <Hover /> */}</h1>
              <Link
                to="/SignUp/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="SignIn">
                  Hello Sign In
                  <br />
                  Accounts&List
                  <FaCaretDown />
                </p>
              </Link>
            </div>
          ) : (
            <div>
              Hello Sign In
              <br />
              Accounts&List
              <FaCaretDown />
            </div>
          )}
        </div>
        <div className="Return">
          Return &<br /> Order
        </div>
        <Link
          to={"/ShoppingCart/"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="Cart">
            <span
              style={{
                position: "absolute",
                top: "15px",
                right: "60px",
                color: "orange",
              }}
            >
              {Amount}
            </span>
            <FaShoppingCart style={{ fontSize: "28px" }} />
            Cart
          </div>
        </Link>
      </div>
    </div>
  );
}
