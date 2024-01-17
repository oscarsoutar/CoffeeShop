import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Ossy's Coffee</h1>
        <p>Certified Buss</p>
        <Link to="/Menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
      <div className="descriptionContainer">
        <p className="descriptionText">
          Explore the finest coffee blends crafted with passion and expertise. 
          Immerse yourself in a world of rich flavors and delightful aromas. 
          Your journey to extraordinary coffee begins here.
        </p>
      </div>
    </div>
  );
}
