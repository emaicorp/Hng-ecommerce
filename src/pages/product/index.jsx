import React, { useState } from 'react';
import Header from "../../components/header";
import Products from "../../components/products";
import SidebarComponent from '../../components/sidebar';
import Newsletter from "../../components/newsLetter";
import Footer from '../../components/footer';
import FilterCategory from '../../components/filterCategory';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPriceFilter(null); // Reset price filter when category changes
  };

  const handlePriceChange = (price) => {
    setPriceFilter(price); // Set price filter state
    setSelectedCategory(null); // Reset category filter when price changes
  };

  return (
    <div className="">
      <Header header={"Product Listing"} />
      <FilterCategory/>
      <div className="container p-0 mt-5 mb-5 px-0 products-container">
        <div className="d-flex m-0 p-0 products-div">
          <div className="sidebar sticky-top d-md-block d-none">
            <SidebarComponent onCategoryChange={handleCategoryChange} onPriceChange={handlePriceChange} />
          </div>
          <div className="products">
            <Products selectedCategory={selectedCategory} priceFilter={priceFilter} />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
