import React from "react";
import "./Result.css";

export default function Result(props) {
  return (
    <div className="Result">
      <h2>Your Results</h2>
      <p>{props.address}</p>
    </div>
  );
}
