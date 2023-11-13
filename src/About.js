import React from "react";
import location from "./location.png";
import security from "./security.png";
import research from "./research.png";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <h2>About IP Detective</h2>
      <section className="row">
        <article className="col-12 col-sm-4">
          <img src={location} alt="location" title="Location" />
          <h3>Geo-Locate Any IP</h3>
          <p>
            Instantly pinpoint the geographical location of any IP address.
            Whether you're tracking the origin of a website visitor or
            investigating suspicious online activity, IP Detective provides
            precise location data.
          </p>
        </article>
        <article className="col-12 col-sm-4">
          <img src={security} alt="security" title="Security" />
          <h3>Enhanced Security</h3>
          <p>
            Monitor your network for potential threats by identifying the
            location and ISP of incoming connections. Detect and respond to
            unauthorized access more effectively, bolstering your online
            security.
          </p>
        </article>
        <article className="col-12 col-sm-4">
          <img src={research} alt="research" title="Research" />
          <h3>Research and Insights:</h3>
          <p>
            Explore the global reach of your website's audience or gather
            valuable data for research projects. IP Detective's data on
            countries, regions, and cities linked to IPs can provide valuable
            insights for businesses and researchers.
          </p>
        </article>
      </section>
    </div>
  );
}
