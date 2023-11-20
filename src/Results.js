import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <h2>Your Results</h2>
      <p>{props.address}</p>
    </div>
  );
}
