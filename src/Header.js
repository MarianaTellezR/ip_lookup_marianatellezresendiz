import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
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
