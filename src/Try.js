import React, { useState } from "react";
import "./Try.css";
import Results from "./Results";

export default function Try() {
  const [componentVisible, setComponentVisible] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComponentVisible(true);
  };

  return (
    <div className="Try">
      <h2>IP Detective: Lookup Address</h2>
      <section>
        <div>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="ip">Enter the IP address:</label>
            <input
              type="text"
              id="ip"
              name="ip"
              placeholder="IP Address"
              required
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </section>
      {componentVisible && <Results />}
    </div>
  );
}
