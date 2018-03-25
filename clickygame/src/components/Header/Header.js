import React from "react";
import "./Header.css";
import mufcCrest from "../../images/mufcCrest.png"

const Header = props =>
  <header className="jumbotron">
    <img className="crest" src={mufcCrest} alt="Manchester United" />
    <h1 className="headline__primary">Manchester United Click Game</h1>
    <p className="break">-</p>
    <p className="headline__sub">Click any player to score points... just don't click anyone twice</p>
  </header>;

export default Header;
