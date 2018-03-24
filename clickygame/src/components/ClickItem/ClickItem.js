import React from "react";
import "./ClickItem.css";

const ClickItem = props =>
  <div className="click-item" key={props.id} ><p className="imgNumber">{props.id}</p><img className="playerImage" src={props.image} /></div>
;

export default ClickItem;
