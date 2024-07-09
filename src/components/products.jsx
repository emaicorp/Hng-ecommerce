import productData from './items'; 
import AddToCartBtn from './addToCartBtn';
import StarRating from './stars';
import * as Icon from 'iconsax-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


const Product = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  // Sample products
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ];
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
                <AddToCartBtn productId={product.id} text={"Add To Cart"} click={() => handleAddToCart(product)}/>
                {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
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
