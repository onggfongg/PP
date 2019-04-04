import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { ProductProvider } from "./context";

ReactDOM.render(
  <Provider store={store}>
    <Router />,
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
