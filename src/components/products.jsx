import React from 'react';
import productData from './items'; 
import AddToCartBtn from './addToCartBtn';

const Product = () => {
  
  return (
    <div className="container">
      <div className="row">
        {productData.products.map(product => (
            
          <div key={product.id} className="col">
            <div className="card mb-4">
                <div className="card-img-top">
                <img src={product.imgUrl} className="" alt={product.name} />
                </div>
              
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">Rating: {product.stars} stars</p>
                <AddToCartBtn productId={product.id} />
              
              </div>
             
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Product;
