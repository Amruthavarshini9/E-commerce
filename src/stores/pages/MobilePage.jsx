// src/stores/pages/MobilePage.jsx
import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const toggleCompany = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const filteredProducts =
    selectedCompanies.length === 0
      ? mobileData
      : mobileData.filter((item) => selectedCompanies.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Company Filter Section */}
        <div className="pro-selected">
          {Array.from(new Set(mobileData.map((m) => m.company))).map((company) => (
            <div key={company} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(company)}
                  onChange={() => toggleCompany(company)}
                />
                {company}
              </label>
            </div>
          ))}
        </div>

        {/* Product Display Section */}
        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
              <Link to={`/mobiles/${item.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
