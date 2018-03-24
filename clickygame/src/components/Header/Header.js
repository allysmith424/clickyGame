import React from "react";
import "./Header.css";

const Header = props =>
  <header className="jumbotron">
    <h1 className="display-4">Clicky Game</h1>
    <p className="lead">Click on an image to earn points, but don't click on any more than once</p>
  </header>;

export default Header;
