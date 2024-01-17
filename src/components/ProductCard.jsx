import React from 'react';
import "../styles/ProductCard.css"

export default function ProductCard({name, image, description, price}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <div className="button-container">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}