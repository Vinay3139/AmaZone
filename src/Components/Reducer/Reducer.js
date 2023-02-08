import React from "react";

function Reducer(state, action) {
  if (action.type === "PRODUCTFETCH") {
    return { ...state, cart: action.payload };
  }
}

export default Reducer;
