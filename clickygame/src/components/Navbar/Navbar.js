import React from "react";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <p className="navbar-brand">Clicky Game</p>
    <p className="commentary">{props.commentary} </p>
    <p className="score">Score: {props.count} | Top score: {props.topScore} </p>
  </nav>;

export default Navbar;
