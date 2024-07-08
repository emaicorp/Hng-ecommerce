import React from 'react';
import productData from './items.json'; // Adjust the path to your JSON file
import AirFrier from '../assets/images/airfrier.png'

const Product = () => {
  
  return (
    <div className="container">
      <h1>Product Listing</h1>
      <div className="row">
        {productData.products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img src={product.imgUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">Rating: {product.stars} stars</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
