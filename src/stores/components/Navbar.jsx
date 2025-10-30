// src/stores/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// ✅ Import all product data
import { fridgeData } from '../data/fridge';
import { mobileData } from '../data/mobiles';
import { computerData } from '../data/computers';
import { acData } from '../data/ac';
import { kitchenData } from '../data/kitchen';
import { furnitureData } from '../data/furniture';
import { watchData } from '../data/watch';
import { menData } from '../data/men';
import { womanData } from '../data/woman';

const Navbar = () => {
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  // ✅ Combine all data into a single array with a category tag
  const allProducts = [
    ...fridgeData.map(item => ({ ...item, category: 'fridge' })),
    ...mobileData.map(item => ({ ...item, category: 'mobiles' })),
    ...computerData.map(item => ({ ...item, category: 'computers' })),
    ...acData.map(item => ({ ...item, category: 'ac' })),
    ...kitchenData.map(item => ({ ...item, category: 'kitchen' })),
    ...furnitureData.map(item => ({ ...item, category: 'furniture' })),
    ...watchData.map(item => ({ ...item, category: 'watch' })),
    ...menData.map(item => ({ ...item, category: 'men' })),
    ...womanData.map(item => ({ ...item, category: 'woman' })),
  ];

  // ✅ Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Category quick navigation
    const categories = [
      'fridge', 'mobiles', 'watch', 'ac', 'men', 'woman',
      'furniture', 'kitchen', 'computers'
    ];

    const matchedCategory = categories.find(
      (cat) => cat.toLowerCase() === value.trim()
    );

    if (matchedCategory) {
      navigate(`/${matchedCategory}`);
      setFilteredResults([]);
      return;
    }

    // ✅ Filter across all products
    if (value === '') {
      setFilteredResults([]);
    } else {
      const results = allProducts.filter((item) =>
        (item.brand?.toLowerCase().includes(value) ||
         item.company?.toLowerCase().includes(value) ||
         item.model?.toLowerCase().includes(value) ||
         item.description?.toLowerCase().includes(value))
      );
      setFilteredResults(results);
    }
  };

  // ✅ Handle pressing Enter to jump to category
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const categories = [
        'fridge', 'mobiles', 'watch', 'ac', 'men', 'woman',
        'furniture', 'kitchen', 'computers'
      ];
      const matchedCategory = categories.find(
        (cat) => cat.toLowerCase() === searchTerm.trim()
      );
      if (matchedCategory) {
        navigate(`/${matchedCategory}`);
      }
    }
  };

  return (
    <>
      <div className='navSection'>
        <Link to='/'>
          <div className='title'>
            <h2>E-Mart</h2>
          </div>
        </Link>

        {/* ✅ Universal Search */}
        <div className='Search'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />

          {/* ✅ Dropdown search results */}
          {filteredResults.length > 0 && (
            <div className='search-dropdown'>
              {filteredResults.map((item) => (
                <div
                  key={`${item.category}-${item.id}`}
                  className='search-item'
                  onClick={() => {
                    navigate(`/${item.category}/${item.id}`);
                    setFilteredResults([]);
                    setSearchTerm('');
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.model}
                    style={{ width: '40px', height: '40px', marginRight: '8px' }}
                  />
                  {item.brand || item.company} - {item.model}
                  <span style={{ marginLeft: '6px', fontSize: '12px', color: '#888' }}>
                    ({item.category})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ✅ User + Cart */}
        <div className='user'>
          <Link to='/Auth'>
            <div className='user-details'>SignIN / SignUP</div>
          </Link>

          <Link to='/cart'>
            <div className='cart'>
              Cart
              <span>{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* ✅ Category submenu */}
      <div className='subMenu'>
        <ul>
          <Link to='/mobiles'><li>Mobiles</li></Link>
          <Link to='/watch'><li>Watches</li></Link>
          <Link to='/ac'><li>AC</li></Link>
          <Link to='/men'><li>Men Fashion</li></Link>
          <Link to='/woman'><li>Woman Fashion</li></Link>
          <Link to='/furniture'><li>Furniture</li></Link>
          <Link to='/kitchen'><li>Kitchens</li></Link>
          <Link to='/computers'><li>Computers</li></Link>
          <Link to='/fridge'><li>Fridge</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
