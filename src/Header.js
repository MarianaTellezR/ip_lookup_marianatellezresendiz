import React from "react";
import "./Header.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="IP Detective" title="IP Detective" />
        <nav>
          <a href="#section1">Home</a>
          <a href="#section2">Try it</a>
          <a href="#section3">About</a>
          <a href="#section4">Questions</a>
        </nav>
      </header>
    </div>
  );
}
