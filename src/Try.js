import React, { useState } from "react";
import "./Try.css";
import Result from "./Result";
import axios from "axios";

const apiKey = "ANYzH5mXNp6wmAgNFfDWmQ==W42f644bVF4hybzS";

export default function Try() {
  const [componentVisible, setComponentVisible] = useState(false);
  const [ip, setIp] = useState("");
  const [apiResult, setApiResult] = useState(null); // State to store API result
  const [data, setData] = useState({});
  const [isIpValid, setIsIpValid] = useState(true);

  function updateIP(event) {
    const enteredIp = event.target.value;
    setIp(enteredIp);

    // Basic IP address validation
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    setIsIpValid(ipRegex.test(enteredIp));
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!isIpValid) {
      alert(
        "Invalid IP address. Please enter a valid IP address. Must be in the format A.B.C.D."
      );
      return;
    }


    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/iplookup?address=${ip}`,
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      setApiResult(response.data);
      setData({
        address: response.data.address,
        city: response.data.city,
        country: response.data.country,
        isp: response.data.isp,
        latitude: response.data.lat,
        longitude: response.data.lon,
        region: response.data.region,
        timezone: response.data.timezone,
        zip: response.data.zip,
      });
      setComponentVisible(true);
    } catch (error) {
      console.error("Error: ", error);
    }
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
              onChange={updateIP}
              required
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </section>

      {componentVisible && (
        <div className="Results">
          <Result address={ip} apiResult={apiResult} data={data} />
        </div>
      )}
    </div>
  );
}
