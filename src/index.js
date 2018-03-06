import React from "react";
import ReactDOM from "react-dom";

const what = React.createElement("h1", {}, "hello react!");
//1st arg: any type of HTML tag will work here in quotes.
//2nd arg: the OPTIONS for that element:  classname, id, "data attribs" etc.
//3rd arg: innerText or Children.
const where = document.getElementById("root");

ReactDOM.render(what, where); //nice
