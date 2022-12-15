
import { Feature } from "../../Shared/Common";
import { CiLocationOn } from "react-icons/ci";
import { FcLock } from "react-icons/fc";
import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CountContext } from "../Routing/Routing";


export default function Cart(props) {
  const {Function}=useContext(CountContext)
  // const [Cart,setCart]=useState([])

  // useEffect(()=>{
  //   setCart(props.ProductDetail)
  // },[])
  return (
    <>
      <div style={{height:"446px"}}>
        <div className="carts">
          <span>{props.AddCart.price}</span>
          <br />
          <p style={{ marginTop: "10px" }}>{props.AddCart.Free}</p>
          <p>
            <CiLocationOn />
            {props.AddCart.Location}
          </p>
          <span>{props.AddCart.sold}</span>
          <br />
          {/* <input type="dropdown"/> */}
         Quantity: <select style={{width:"40px"
    ,height:"20px"}}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select><br/>


          <button className="Carted" onClick={()=>{
            Function(props.ProductDetail)
            console.log(props.ProductDetail)
          }} >Add To Cart</button>



          <Link to={"/CheckOut/"}>
          <button className="Cartss">Buy Now</button>
          </Link>
          <br />
          <p style={{ marginTop: "15px" }}>
            <FcLock />
            <a className="transaction">Secure Transaction</a>
          </p>
          <br />
          <input type="checkbox"></input>
          <span>Add gift option</span>
          <hr />
          <button
            style={{
              width: "204px",
              height: "29px",
              padding: "0px 10px 0px 11px",
            }}
          >
            Add To Wish List
          </button>
        </div>
      </div>
    </>
  );
}

