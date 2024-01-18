import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About the Owner</h1>
        <img
          src="https://media.istockphoto.com/id/1343278328/photo/professional-asian-chinese-senior-man-barista-connoisseur-performing-coffee-cupping-tasting.jpg?s=612x612&w=0&k=20&c=HxYDQ9muhsy1Ih818MeM-5gRps-PAFhYwRnVO6pfNxM="
          alt="Your Name"
          className="profile-photo"
        />
        <p className='name'>
          Chanadol Soutar
        </p>
        <p className='ID'>65011275</p>
        <div className='text-container'>
          <p>
            Hello coffee enthusiasts! I'm Oscar, a student proudly managing
            and owning this coffee shop. Juggling the world of academia and the love for crafting
            exquisite coffee experiences, I embarked on a journey to create a space where people can
            connect, relax, and savor the finest coffee blends.
          </p>
          <p>
            At Ossy's Coffee, we are driven by a passion for entrepreneurship and a fondness for quality
            coffee. Come join us and let's share moments over a cup of carefully brewed goodness!
          </p>
        </div>
      </div>
    </div>
  );
}
