import React from 'react';
import "../styles/ProductCard.css"

export default function ProductCard({ name, image, description, price, discountedPrice }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className='price'>${price}</p>
      <p className='discountedPrice'>${discountedPrice}</p>
      <div className="button-container">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}