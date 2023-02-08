import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routing from "./Components/Routing/Routing";
// import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./ReuxToolKit/Store";
import { AppProvider } from "./Components/Reducer/Context";
// import Provider from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <AppProvider>
      <Routing />
    </AppProvider>
    {/* </Provider> */}
  </BrowserRouter>
);
