import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">🔧 Spare Parts AI</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/about">About</a>
        <ThemeToggle />
      <Link to="/add">Add New Part</Link>
    </nav>
    </header>
  );
}

export default Header;
