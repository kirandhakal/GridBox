import React from "react";
import "../App.css";

const GridBox = ({ isActive }) => {
  return <div className={`grid-box ${isActive ? "active" : ""}`}></div>;
};

export default GridBox;
