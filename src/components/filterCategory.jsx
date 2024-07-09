import * as Icon from 'iconsax-react';
import React, { useState } from 'react';

export default function FilterCategory() {
  const [dropdowns, setDropdowns] = useState({
    popularity: false,
    price: false,
  });

  function drop(id) {
    setDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <h5 className='col-md-3'>Filter by Category</h5>
            <div className="cate col-md-8 d-flex justify-content-between align-items-start">
              <p>Computer and accessories</p>
              <p>Phones and Tablet</p>
              <p>Electronic</p>
              <p>Home and kitchen</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex  justify-content-between align-items-center">
          <h6>Sort By :</h6>
          <div className="filters d-flex  gap-2 ">
            <button
              className='btn border border-1 text-black rounded rounded-2'
              onClick={() => drop('popularity')}
            >
              Popularity
              <Icon.ArrowDown2 className={`icon ${dropdowns.popularity ? 'rotate' : ''}`} size={20}/>
            </button>
          
            <button
              className='btn border border-1 text-black rounded rounded-2'
              onClick={() => drop('price')}
            >
              Price
              <Icon.ArrowDown2 className={`icon ${dropdowns.price ? 'rotate' : ''}`} size={20} />
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
