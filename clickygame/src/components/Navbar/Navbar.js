import React from "react";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <p className="navbar-brand">Clicky Game</p>
    <p className="commentary">You guessed </p>
    <p className="score">Score: | Top score: </p>
  </nav>;

export default Navbar;
