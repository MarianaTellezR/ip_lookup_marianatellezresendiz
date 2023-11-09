import React from "react";
import "./Header.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="IP Detective" title="IP Detective" />
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#try">Try it out</a>
          <a href="#questions">Questions</a>
        </nav>
      </header>
    </div>
  );
}
