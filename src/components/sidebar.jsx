import React,{useState} from 'react';
import DropDown from './dropDown';
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

function Availability() {
  return (
    <div>
      <div className="d-flex align-items-center gap-1 px-1">
        <input type="radio" name="radio1" id="radio12" defaultChecked />
        <label htmlFor="radio12">In Stock</label>
      </div>
      <div className="d-flex align-items-center gap-1 px-1">
        <input type="radio" name="radio1" id="radio11" />
        <label htmlFor="radio11">Out Of Stock</label>
      </div>
    </div>
  );
}

export default function SidebarComponent({ onCategoryChange, onPriceChange }) {
    const basePrice = 2000;
  
    return (
      <div className="sidebar-container p-0 m-0">
        <div className="category m-0 p-0 gy-3">
          <DropDown btnName={"Category"} dropItems={<Category onCategoryChange={onCategoryChange} />} />
          <DropDown btnName={"Price"} dropItems={<ProgressBar basePrice={basePrice} onPriceChange={onPriceChange} />} />
          <DropDown btnName={"Availability"} dropItems={<Availability/>} />
        </div>
      </div>
    );
  }
