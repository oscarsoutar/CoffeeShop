import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/javaCup.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
          <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <a className="Active" href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <a href="/news">News</a>
      </div>
    </div>
  );
}
