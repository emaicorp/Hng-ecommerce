import * as Icon from 'iconsax-react';
import React, { useState } from 'react';
import ProgressBar from './priceRange';
function Category({ onCategoryChange }) {
  return (
    <div>
      <a href="#" onClick={() => onCategoryChange("Computer and accessories")}>Computer and accessories</a>
      <a href="#" onClick={() => onCategoryChange("phones")}>Phones and Tablet</a>
      <a href="#" onClick={() => onCategoryChange("electronic")}>Electronic</a>
      <a href="#" onClick={() => onCategoryChange("home and kitchen")}>Home and kitchen</a>
      <a href="#" onClick={() => onCategoryChange("fashion wears")}>Fashion Wears</a>
      <a href="#" onClick={() => onCategoryChange("all")}>All category</a>
    </div>
  );
}

export default function FilterCategory({ onCategoryChange , onPriceChange}) {
  const [dropdowns, setDropdowns] = useState({
    popularity: false,
    price: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSort, setIsSort] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function drop() {
    setIsOpen(!isOpen);
  }
  function sorts() {
    setIsSort(!isSort);
  }
  function toggleFilter(id) {
    setDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }
  const basePrice = 2000;

  return (
    <div className="container mt-5">
      <div className="row d-none d-md-flex" id='filter-md'>
        <div className="col-md-9">
          <div className="row">
            <h5 className="col-md-3">Filter by Category</h5>
            <div className="cate col-md-8 d-flex justify-content-between align-items-start">
            <a href="#" onClick={() => onCategoryChange("Computer and accessories")}>Computer and accessories</a>
            <a href="#" onClick={() => onCategoryChange("phones")}>Phones</a>
            <a href="#" onClick={() => onCategoryChange("electronic")}>Electronic</a>
            <a href="#" onClick={() => onCategoryChange("home and kitchen")}>Home and kitchen</a>
            <a href="#" onClick={() => onCategoryChange("fashion wears")}>Fashion</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-between align-items-center">
          <h6>Sort By :</h6>
          <div className="filters d-flex gap-2">
            <button
              className="btn border border-1 text-black rounded rounded-2"
              onClick={() => toggleFilter('popularity')}
            >
              Popularity
              <Icon.ArrowDown2 className={`icon ${dropdowns.popularity ? 'rotate' : ''}`} size={20} />
            </button>
            <button
              className="btn border border-1 text-black rounded rounded-2"
              onClick={() => toggleFilter('price')}
            >
              Price
              <Icon.ArrowDown2 className={`icon ${dropdowns.price ? 'rotate' : ''}`} size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center d-md-none border border-2 rounded rounded-2 p-2" id='filter-sm'>
        <div className="drop-btn">
          <span className="d-flex filter-drop-btn justify-content-center align-items-center accent-color gap-2" onClick={drop}>
            <Icon.FilterRemove /> Filter

          </span>
        </div>
        <span className="span-border"> </span>
        <span className="d-flex justify-content-center align-items-center accent-color gap-2" onClick={sorts}>
          <Icon.ArrowSwapVertical /> Sort
        </span>
      </div>
      <div className="d-flex">
        <div className="filter-drop">

          <div className={`filter-item ${isOpen ? 'open' : ''}`}>
            <Category onCategoryChange={onCategoryChange} />
          </div>
        </div>
        <div className="filter-drop">
          <div className={`filter-item ${isSort ? 'open' : ''}`}>
            <ProgressBar basePrice={basePrice} onPriceChange={onPriceChange} className="z-2"/>
          </div>
        </div>
      </div>

    </div>
  );
}
