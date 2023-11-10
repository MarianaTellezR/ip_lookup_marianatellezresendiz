import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>
        Explore the power of <span>IP Detective</span>{" "}
        <i className="fa-solid fa-magnifying-glass"></i>
      </h1>
      <p>
        IP Detective: Uncover IP address details instantly! Enter any IP, and
        get data on country, region, city, zip, coordinates, timezone, ISP, and
        view its location on a map. Explore the online world effortlessly.
      </p>
      <a href="#try">Give it a try!</a>
    </div>
  );
}
