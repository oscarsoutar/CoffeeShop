import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="headerContainer">
          <h1>Ossy's Coffee</h1>
          <p>Certified Buss</p>
          <Link to="/News">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div className="descriptionContainer">
        <img
          src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png"
          alt="Coffee Cup"
        />
        <p className="descriptionText">
          <p>At Ossy's, we curate a sensory journey that transcends the ordinary. Our commitment to excellence begins with sourcing the world's finest coffee beans, resulting in a diverse menu that caters to every palate.</p>
          <p>Step into our cozy haven, where the aroma of freshly ground beans fills the air, inviting you to unwind and savor the moment. As a certified business, we take pride in upholding the highest standards, ensuring that each visit is an exceptional experience.</p>
          <p>Discover a symphony of flavors, from the smooth richness of Colombian Coffee to the vibrant notes of Ethiopian blends. Our menu is a celebration of culture and craftsmanship, meticulously prepared by our skilled baristas.</p>
          <p>Beyond the cup, Ossy's Coffee is a lifestyle—an inviting space for connection, creativity, and inspiration. Join our community, where every visit is an opportunity to explore, indulge, and enjoy the artistry of coffee.</p>
          <p>Explore our menu, learn about our story, and join us at Ossy's Coffee for a journey of flavor, warmth, and shared moments.</p>
        </p>
      </div>
    </>
  );
}
