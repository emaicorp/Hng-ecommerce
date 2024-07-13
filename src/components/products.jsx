import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { WishListContext } from '../contexts/wishListContext';
import AddToCartBtn from './addToCartBtn';
import StarRating from './stars';
import * as Icon from 'iconsax-react';

const Product = ({ selectedCategory, priceFilter }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishList, removeFromWishList, wishList } = useContext(WishListContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=${process.env.REACT_APP_TIMBU_ORGANIZATION_ID}&reverse_sort=false&page=1&size=10&Appid=${process.env.REACT_APP_TIMBU_APP_ID}&Apikey=${process.env.REACT_APP_TIMBU_CLOUD_PUBLIC_KEY}`;

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setProducts(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [api]);

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (selectedCategory) {
      if (selectedCategory === "all") {
        return filteredProducts;
      } else {
        filteredProducts = filteredProducts.filter(product => {
          if (product.categories && product.categories.length > 0) {
            return product.categories.some(category => category.name === selectedCategory);
          }
          return false;
        });
      }
    }

    if (priceFilter) {
      filteredProducts = filteredProducts.filter(product => {
        return product.current_price[0].NGN[0] <= priceFilter;
      });
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  // Function to handle wishlist click
  const handleWishlistClick = (product) => {
    const isInWishlist = wishList.some(item => item.id === product.id); // Check if product is in wishlist
    if (isInWishlist) {
      removeFromWishList(product.id);
    } else {
      addToWishList(product);
    }
  };

  return (
    <div className="product-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="m-0 p-0 prod-row gap-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => {
              const isInWishlist = wishList.some(item => item.id === product.id); // Check if product is in wishlist for each product
              return (
                <div key={product.id} className="col-md-4 m-0 p-0 card-contaner">
                  <div className="card mb-4">
                    <div className="card-img-top">
                      <img
                        src={product.photos.length > 0 ? `https://api.timbu.cloud/images/${product.photos[0].url}` : 'placeholder.jpg'}
                        alt={product.name}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text price"><s>N</s>{product.current_price[0].NGN[0]}</p>
                      <p className="card-text"><StarRating rating={product.stars || 0} /></p>
                      <AddToCartBtn productId={product.id} text="Add To Cart" click={() => addToCart(product)} />
                    </div>
                    <div className="util d-flex justify-content-between align-items-center p-2">
                      <div className="promo p-1 rounded bg-main smaller">-20%</div>
                      <div className="like" onClick={() => handleWishlistClick(product)}> {/* Add click handler */}
                        <Icon.Heart fill='red' className={`wish ${isInWishlist ? 'selected' : ''}`} /> {/* Dynamically set class name */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No products found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
