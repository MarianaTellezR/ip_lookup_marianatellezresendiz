import React from "react";
import "./Try.css";

export default function Try() {
  return (
    <div className="Try">
      <h2>IP Detective: Lookup Address</h2>
      <section>
        <div>
          <form>
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
    </div>
  );
}
