// src/stores/pages/FridgePage.jsx
import React, { useState } from 'react';
import { fridgeData } from '../data/fridge';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FridgePage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredProducts =
    selectedBrands.length === 0
      ? fridgeData
      : fridgeData.filter((item) => selectedBrands.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className='fullpage'>
        <div className='pro-selected'>
          {Array.from(new Set(fridgeData.map((f) => f.brand))).map((brand) => (
            <div key={brand} className='pro-input'>
              <label>
                <input
                  type='checkbox'
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </div>

        <div className='pageSection'>
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/fridge/${item.id}`}>
                <div className='pageImg'>
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className='proModel'>
                {item.brand}, {item.model}
              </div>
              <Link to={`/fridge/${item.id}`} className='view-details-link'>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FridgePage;
