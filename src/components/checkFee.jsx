
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

export default function CheckFee({link}){
    const { cart } = useContext(CartContext);
    let price = null
    {cart.length === 0 ? (
        price = 0
      ) : (
        cart.map((item, index) => (
            price +=  parseFloat(item.price.replace(/,/g, ''))*item.quantity
        ))
    )}
    return(
        <div className="checkFee">
            <div className="cart-summary border-bot d-flex justify-content-between align-items-center">
                <h6>Cart Summary</h6>
                <h6>{cart.length} item </h6>
                
            </div>
            <div className="delivary mt-3 border-bot d-flex justify-content-between align-items-center">
                <h6>Delivery charge</h6>
                <p className="w-50 smallest">Add your delivery address to see your delivery charge</p>
            
            </div>
            <div className="sub-total mt-3 border-bot d-flex justify-content-between align-items-center">
                <h6>Sub Total</h6>
                <h6><s>N</s>{price.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h6>
            </div>
            <div className="text-danger text-end w-100  smallest">Excluding delivery charge </div>
            <div className="sub-total mt-3 border-bot d-flex justify-content-between align-items-center">
                <h6>Total</h6>
                <h6><s>N</s>{price.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h6>
            </div>
            <div className="mt-3 ">
            <Link to={link} className="text-white text-decoration-none"><button className="btn bg-accent rounded text-white w-100">Checkout</button></Link>
                </div>

                <div className="pay-cards d-flex justify-content-center gap-3 mt-3 align-items-center">
                    <p className="">We Accept</p>
                    <div className="pay-cards-opt d-flex  gap-3 align-items-center">
                        <img src="/images/logos_mastercard.svg" alt="" srcset="" />
                        <img src="/images/logos_visaelectron.svg" alt="" srcset="" />
                        <img src="/images/american express.svg" alt="" srcset="" />
                    </div>
                </div>
    
        </div>
       
    )
}