import React from "react";
import "./Result.css";
import address from "./address1.png";
import ipaddress from "./address2.png";
import location from "./address3.png";
import timezone from "./address4.png";

export default function Result(props) {
  return (
    <div className="Result">
      <h2>Your Results</h2>
      <p>{props.address}</p>
      <div className="container">
        <div className="row">
          <img src={address} title="Address" alt="Address" />
        </div>
        <div className="row">
          <img src={ipaddress} title="IP Address" alt="IP Address" />
        </div>
        <div className="row">
          <img src={location} title="Location" alt="Location" />
        </div>
        <div className="row">
          <img src={timezone} title="Timezone" alt="Timezone" />
        </div>
      </div>
    </div>
  );
}
