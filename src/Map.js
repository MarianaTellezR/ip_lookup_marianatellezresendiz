import React from "react";

export default function Map(props) {
  return (
    <div className="Map">
      <p>{props.lat}, {props.lon}</p>
    </div>
  );
}
