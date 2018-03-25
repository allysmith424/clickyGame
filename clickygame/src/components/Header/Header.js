import React from "react";
import "./Header.css";

const Header = props =>
  <header className="jumbotron">
    <img className="crest" src="https://www.frankrostron.com/assets/img/brands/mufc.png"/>
    <h1 className="headline__primary">Manchester United Click Game</h1>
    <p className="break">-</p>
    <p className="headline__sub">Click any player to score points... just don't click anyone twice</p>
  </header>;

export default Header;
