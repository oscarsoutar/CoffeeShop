import React from 'react';
import '../styles/News.css';
import ProductCard from '../components/ProductCard';
import colombianImg from "../assets/ColombiaCoffee.webp"
import ethiopianImg from "../assets/EthiopianCoffee.webp"
import frenchImg from "../assets/FrenchCoffee.jpg"

export default function News() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Promotions</h1>
      <div className="product-list">
        <ProductCard
          name="Colombian Coffee"
          image={colombianImg}
          description="Smooth, medium roast coffee from Colombia"
          price={12.99}
          discountedPrice={9.99}
        />

        <ProductCard
          name="Ethiopian Coffee"
          image={ethiopianImg}
          description="Fruity, floral flavor from Ethiopian beans"
          price={14.99}
          discountedPrice={11.99}
        />

        <ProductCard
          name="French Roast"
          image={frenchImg}
          description="Dark, smoky French roast coffee"
          price={11.99}
          discountedPrice={8.99}
        />
      </div>
    </div>
  )
}