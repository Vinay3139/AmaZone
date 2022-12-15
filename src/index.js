import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import Routing from "./Components/Routing/Routing";
// import OnClick from "./Components/OnClick/OnClick";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
   <Routing/>
  </BrowserRouter>
);


