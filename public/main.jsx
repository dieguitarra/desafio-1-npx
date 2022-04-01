import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/App";
import { getFirestoreApp } from "../src/firebase/config";

getFirestoreApp();

ReactDOM.render(<App />, document.getElementById("root"));
