import React from "react";
import ReactDOM from "react-dom";

// JSX
const what = <h1 className="header" onClick=""> Hello React! </h1>; 
//class vs. className (extra Name)
//onclick vs. onClick (camelCase)
const where = document.getElementById("root");

ReactDOM.render(what, where); //nice
