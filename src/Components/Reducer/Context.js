import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import Reducer from "./Reducer";
export const CountContext = React.createContext();
const intialState = {
  cart: [],
  Amount: 1,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, intialState);
  const [states, setStates] = useState(0);
  const [receive, setReceive] = useState([]);
  const [productCart, setProductCart] = useState([]);
  //   function PropsAdd(ProductDetail) {
  //     setReceive([ProductDetail]);
  //     setStates(states + 1);

  //   }
  const ProductFetched = (ProductDetail) => {
    console.log(ProductDetail);
    // dispatch({ type: "PRODUCTFETCH", payload: ProductDetail });
    setProductCart((prevProduct) => {
      return [...prevProduct, ProductDetail];
    });
  };

  const ProductFetch = () => {
    dispatch({ type: "PRODUCTFETCH", payload: productCart });
  };
  useEffect(() => {
    ProductFetch();
  }, [productCart]);

  // useEffect(()=>{

  // })

  console.log(state.cart);
  return (
    <CountContext.Provider
      value={{
        states,
        setStates,
        Receive: receive,
        ...state,
        ProductFetched,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
