import { Routes, Route } from "react-router-dom";
import OnClick from "../OnClick/OnClick";
import App from "../../App";
import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import SignUp from "../SignUp/SignUp";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckOut from "../CheckOut/CheckOut";
import React from "react";

export const CountContext = React.createContext();

export default function Routing(props) {
  const [state, setState] = useState(0);
  const [receive, setReceive] = useState([]);
  function PropsAdd(ProductDetail) {
    setReceive([ProductDetail]);
    setState(state + 1);
  }
  console.log(receive);

  return (
    <>
      <CountContext.Provider
        value={{ Count: [state, setState], Function: PropsAdd ,Receive:receive}}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/ShoppingCart/"
            element={<ShoppingCart  />}
          ></Route>
          <Route path="/OnClick/:id" element={<OnClick />} />
          <Route path="/SignUp/" element={<SignUp></SignUp>}></Route>
          <Route path="/CheckOut/" element={<CheckOut />}></Route>
        </Routes>
      </CountContext.Provider>
    </>
  );
}
