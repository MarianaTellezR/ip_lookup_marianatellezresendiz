import React from "react";
import "./Result.css";
import address from "./address1.png";
import ipaddress from "./address2.png";
import location from "./address3.png";
import timezone from "./address4.png";

export default function Result(props) {
  console.log(props.apiResult);
  return (
    <div className="Result">
      <h2>Your Results</h2>
      <div className="container">
        <div className="fila">
          <img src={address} title="Address" alt="Address" />
          <p>Comcast Cable Communications, LLC</p>
        </div>
        <div className="fila">
          <img src={ipaddress} title="IP Address" alt="IP Address" />
          <p>{props.address}</p>
        </div>
        <div className="fila">
          <img src={location} title="Location" alt="Location" />
          <p>Chicago, Illinois, United States</p>
        </div>
        <div className="fila">
          <img src={timezone} title="Timezone" alt="Timezone" />
          <p>America / Chicago</p>
        </div>
      </div>
      <div className="container">
        
      </div>
    </div>
  );
}
