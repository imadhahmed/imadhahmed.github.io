import React from "react";
import ReactDOM from "react-dom";  // Correct import
import { BrowserRouter as Router } from "react-router-dom";  // Correct Router import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router basename="/portfolio">
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
