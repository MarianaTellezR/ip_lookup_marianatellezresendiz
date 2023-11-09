import React from "react";
import logo from "./logo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <section>
          <img src={logo} alt="IP Detective" title="IP Detective" />
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#try">Try it out</a>
            <a href="#questions">Questions</a>
          </nav>
        </section>
        <section>
          <p>
            Coded and created by{" "}
            <a
              href="https://www.linkedin.com/in/mariana-tellez-resendiz/"
              title="Mariana's LinkedIn"
            >
              Mariana Tellez Resendiz
            </a>
          </p>
        </section>
      </footer>
    </div>
  );
}
