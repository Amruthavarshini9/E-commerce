import React from "react";
import { acData } from "../stores/data/ac";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";

import { useCart } from "../stores/context/CartContext";

const AcSingle = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart(); // ✅ This will now work
  
      const product =
          acData.find((item) => item.id === Number(id)) ||
          acData.find((item) => item.id === id);
  
  
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
          <img src={product.image} alt="" />
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
        </div>
        <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
      </div>
    </>
  );
};

export default AcSingle;