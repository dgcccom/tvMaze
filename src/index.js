import React from "react";
import { render } from "react-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import MainMaze from "./components/mainMaze";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

render(<MainMaze></MainMaze>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
