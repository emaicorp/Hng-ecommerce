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



export default function CartPage(){
    const { cart } = useContext(CartContext);
    const navigate = useNavigate()
    const handleCheckout = () => {
      
          if(cart.length> 0 ){
    
          
          navigate("/checkout")
        }else{
          toast.error("No Item In Cart ")
        }
        
      };
    return(
        <div className='bg-shadow'>
            <Header header={"Shopping Cart"}/>
            <div className="container mt-5">
            <div className="card-button ">
                <button className='btn '><Icon.ArrowLeft/> <Link to="/" className='text-black text-decoration-none'>continue Shoping</Link></button>
            </div>

            </div>
            <div className="container mt-5 mb-5">
                <div className="row gap-4">
                    <div className="col-md-7 bg-white p-5">
                        <CartItem/>
                    </div>
                    <div className="col-md-4 bg-white p-3 checkFee"><CheckFee onCheckout={handleCheckout}/></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
 
}