import React, { Component } from "react";
import "./ClickItem.css";

const ClickItem = props =>

    <div className="click-item" key={props.id} onClick={() => props.handleClick(props.id)}>
      <img className="playerImage" src={props.image} />
    </div>;


export default ClickItem;
