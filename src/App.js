import Products from "./Components/Products/Products";
import NavItem from "./Components/NavItem/NavItem";
import Product from "./Components/Products/Product";
import Offer from "./Components/Offers/Offer"
import Sports from "./Components/Sports/Sports";
import { Feature } from "./Shared/Common";
import "./App.css";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import React from "react";
// import CheckOut from "./Components/CheckOut/CheckOut";
// import Technical_Product from "./Components/TechnicalProduct/Technical_Product";

function App() {
  return (
    <div>
      <NavItem />
      <ImageSlider />
      <Product />
      <Products />
      <Offer Feature={Feature} />
      <Sports />
      {/* <CheckOut/> */}
    </div>
  );
}
export default App;
