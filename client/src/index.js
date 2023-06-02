import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className='bg-gradient-to-tr from-indigo-700 via-black to-indigo-800'>
      <App />
    </div>
  </Provider>
);
