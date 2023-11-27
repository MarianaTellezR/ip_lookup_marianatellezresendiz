import React from "react";

import "./Result.css";
import address from "./address1.png";
import ipaddress from "./address2.png";
import location from "./address3.png";
import timezone from "./address4.png";

export default function Result(props) {
  console.log(props.apiResult);
  console.log(props.data);

  if (!props.data.valido) {
    return (
      <div className="Result">
        <h2>Your Results</h2>
        <div class="alert alert-primary" role="alert">
          <p>
            This IP Address is not available. Please enter a valid IP Address.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Result">
        <h2>Results</h2>
        <div className="container">
          <div className="fila">
            <img src={address} title="Address" alt="Address" />
            <p>{props.data.isp}</p>
          </div>
          <div className="fila">
            <img src={ipaddress} title="IP Address" alt="IP Address" />
            <p>{props.address}</p>
          </div>
          <div className="fila">
            <img src={location} title="Location" alt="Location" />
            <p>
              {props.data.city}, {props.data.region}, {props.data.country}
            </p>
          </div>
          <div className="fila">
            <img src={timezone} title="Timezone" alt="Timezone" />
            <p>{props.data.timezone}</p>
          </div>
        </div>
        <div className="container"></div>
      </div>
    );
  }
}
