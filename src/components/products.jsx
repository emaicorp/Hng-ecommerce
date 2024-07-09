import React from 'react';
import productData from './items'; 
import AddToCartBtn from './addToCartBtn';
import StarRating from './stars';
import * as Icon from 'iconsax-react';


const Product = () => {
  
  return (
    
      <div className=" m-0  p-0 prod-row gap-2">
        {productData.products.map(product => (
            
          <div key={product.id} className="col-md-4 m-0 p-o card-contaner">
            <div className="card mb-4">
                <div className="card-img-top">
                <img src={product.imgUrl} className="" alt={product.name} />
                </div>
              
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text price"><s>N</s>{product.price}</p>
                <p className="card-text"><StarRating rating={product.stars} /></p>
                <AddToCartBtn productId={product.id} text={"Add To Cart"} />
              
              </div>
              <div className="util d-flex justify-content-between align-items-center p-2">
                <div className="promo p-1 rounded bg-main smaller">-20%</div>
                <div className="like"><Icon.Heart fill='red'/></div>
            </div>
            </div>
            
          </div>
          
        ))}
  
    </div>
  );
}

export default Product;
