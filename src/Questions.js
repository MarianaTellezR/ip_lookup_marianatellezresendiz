import React from "react";
import "./Questions.css";

export default function Questions() {
  return (
    <div className="Questions">
      <h2>Burning Questions</h2>
      <section>
        <div>
          <h3 className="blue">Why should I use an IP lookup?</h3>
          <p>
            IP Lookups offer a valuable location-specific information about IP
            addresses. You can enhance your security, detect cyber threats and
            uncover business insights with this info.
          </p>
        </div>
        <div>
          <h3 className="pink">How precise is the location data?</h3>
          <p>
            Our IP lookup tool delivers an impressive estimate of the
            exact location. It gets you close to the truth, but there's always
            room for a tiny margin of error.
          </p>
        </div>
        <div>
          <h3 className="yellow">Do you store my search data?</h3>
          <p>
            Absolutely not! We value your privacy and don't store or log any
            search queries. Your investigations remain confidential and secure.
          </p>
        </div>
        <div>
          <h3 className="green">Is the IP lookup tool free?</h3>
          <p>
            Yes, our IP lookup tool is entirely free. Enjoy unlimited searches
            and unravel the mysteries of IP addresses without spending a dime.
          </p>
        </div>
      </section>
    </div>
  );
}
