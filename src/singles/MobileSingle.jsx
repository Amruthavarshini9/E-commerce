// src/singles/FridgeSingle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { mobileData } from '../stores/data/mobiles';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';

const MobileSingle = () => {
  const { id } = useParams();
    const { addToCart, cart } = useCart(); 
  

  const product =
      mobileData.find((item) => item.id === Number(id)) ||
      mobileData.find((item) => item.id === id);


  if (!product) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Product not found for ID={id}
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt={product.model} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>


        </div>
      </div>
    </>
  );
};

export default MobileSingle;