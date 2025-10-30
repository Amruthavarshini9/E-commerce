import React from "react";
import {computerData } from "../stores/data/computers";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/context/CartContext";


const ComputerSingle = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart();



  const product =
    computerData.find((item) => item.id === Number(id)) ||
    computerData.find((item) => item.id === id);


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

          <button onClick={() => addToCart(product)}className="add-to-cart-btn">Add to Cart</button>

        </div>
      </div>
    </>
  );
};

export default ComputerSingle;
