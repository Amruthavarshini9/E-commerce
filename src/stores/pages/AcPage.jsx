import React, { useState } from 'react';
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const AcPage = () => {  // ✅ Uppercase
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  }

  const filteredProduct = selectedProduct.length === 0 ?
    acData : acData.filter(item => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {acData.map((item) => (
            <div className='pro-input' key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(item.company)}
                  onChange={() => companyHandler(item.company)}
                />
                {item.company}
              </label>
            </div>
          ))}
        </div>

        <div className='pageSection'>
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/ac/${item.id}`}>
                <div className='pageImg'>
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className='proModel'>
                {item.company}, {item.model}
              </div>

              <Link to={`/Ac/${item.id}`} className="view-details-link">View Details</Link>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AcPage;
