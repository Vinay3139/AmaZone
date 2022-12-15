import { useContext, useEffect } from "react";
import { useState } from "react";
import { Feature } from "../../Shared/Common";
// import TreandingList from "../TreandingList/TreandingList";
import "./ShoppingCart.css";
import { CountContext } from "../Routing/Routing";
export default function ShoppingCart(props) {
  const [cartData, setCartData] = useState([]);
  const {Receive}=useContext(CountContext)

  useEffect(() => {
    return Receive ? setCartData(Receive[0]) : null;
  }, []);

  console.log(cartData)
  return (
    <>
      {/* <TreandingList /> */}
      {/* <div className="cart_Main_Container" onClick={props.focusOut}> */}
        <div className="shopping_Cart">
          <h1>Shopping Cart</h1>
          <span id="price_Text">{cartData.price}</span>
          <br />
         
          <hr />
          <div className="item_Cart_Data">
            <div>
              <img src={cartData.Image} style={{ width: "180px" }} />
            </div>
            <div style={{ width: "615px" }}>
              <span id="item_Heading">{cartData.text}</span>
              <br />
              <a href="#" id="cart_Links">
                In stock
              </a>
              <br />
              <span id="cart_Small_Text">
                Sold By
                <a href="#" id="cart_Links">
                  NHAM Apparels
                </a>
              </span>
              <br />
              <span id="cart_Small_Text">
                Gift options not available.
                <a href="#" id="cart_Links">
                  Learn more
                </a>
              </span>
              <br />
              <span id="cart_Small_Text">Size: S</span>
              <br />
              <span id="cart_Small_Text">Color: Black</span>
              <br />
              <select className="shop_cart">
                <option>Qty: 1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>

            <div>
              <span id="item_Rate">
                {cartData.price}
                {cartData.save}
              </span>
            </div>
            <br />
          </div>
          <hr />
        </div>
        <div className="cart_Sub_Total"></div>
      {/* </div> */}
    </>
  );
}