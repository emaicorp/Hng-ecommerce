import React, {useContext}from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import { Link,useNavigate } from 'react-router-dom';
import * as Icon from 'iconsax-react';
import CheckFee from '../../components/checkFee';
import CartItem from '../../components/cartItem';
import Footer from '../../components/footer';
import { toast } from 'react-toastify';

import { CartContext } from '../../contexts/CartContext';
import { WishListContext } from '../../contexts/wishListContext';



export default function WishListPage(){
    const { addToCart } = useContext(CartContext);
    const { wishList,clearWishList,removeFromWishList} = useContext(WishListContext);
    const clearWishListItems = ()=>{
        clearWishList();
        toast.success('WishList cleared successfully');
    }
    return(
        <div className='bg-shadow'>
            <Header header={"Wish List"}/>
            <div className="container mt-5">
            <div className="card-button mb-5">
                <button className='btn '><Icon.ArrowLeft/> <Link to="/" className='text-black text-decoration-none'>continue Shoping</Link></button>
            </div>
            <div className=" bg-white container p-3 wish-div mb-5">
              {wishList.length === 0 ? (
          <p>No items in wishList</p>
        ) : (
            <>
          {wishList.map((item, index) => (
          
             
          
        
            <div className='border-bot cart-item-div mb-5' key={index}>
                <div className="cart-item ">
                    <div className="cart-item-img d-flex gap-md-3 w-100 ">
                    <img src={item.photos.length > 0 ? `https://api.timbu.cloud/images/${item.photos[0].url}` : 'placeholder.jpg'} alt={item.name} width={100} height={100} />
                        <div className="card-item-text d-flex w-100  flex-md-row justify-content-between align-items-center flex-column">
                            <div className="">

                            <h6>{item.name}</h6>
                            <p>In Stock</p>
                            </div>
                            <div className="description">
                                <h6>Description</h6>
                                <p>{item.description}</p>
                            </div>
                            <div className=" m-0 p-0 " id='price-tag'>
                            <h6><s>N</s>{item.current_price[0].NGN[0]}</h6>
                        <p className="d-flex justify-content-between gap-3  align-items-center">
                            <s>{item.current_price[0].NGN[0]*1.20}</s>
                            <p className="bg-main rounded smallest p-1 opacity-50 mt-3">-20</p>
                        </p>
                            </div>
                           
                        </div>
                    </div>
                    

                </div>
                <div className="cart-item-actions d-flex gap-3">
                    <button className="btn primary-border smallest" onClick={() => removeFromWishList(item.id)}>Remove</button>
                    <button className="btn primary-border smallest" onClick={() => addToCart(item)}>Add To Cart</button>
                </div>
            </div>

              ))}
              <div className="card-button z-0">
              <button className="btn accent-border z-0 float-end  " onClick={clearWishListItems}>Clear Cart</button>
              </div>
              </>
              

            )}
            
        </div>
            </div>
            
           
            <Footer/>
        </div>
    );
 
}