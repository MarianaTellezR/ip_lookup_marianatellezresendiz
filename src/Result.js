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
      <div class="container text-center">
        <div class="row">
          <div class="col-12 col-md-6">
            <img src={address} title="Address" alt="Address" />
          </div>
          <div class="col-12 col-md-6">
            <img src={ipaddress} title="Address" alt="Address" />
          </div>
        </div>
      </div>
    </div>
  );
}
