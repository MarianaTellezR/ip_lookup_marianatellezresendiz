import React from "react";
import "./Result.css";
import {address} from "./address1.png";
import {ipaddress} from "./address2.png";
import {location} from "./address3.png";
import {timezone} from "./address4.png";

export default function Result(props) {
  return (
    <div className="Result">
      <h2>Your Results</h2>
      <p>{props.address}</p>
    </div>
  );
}
