import { Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function CheckFee({ link, onCheckout }) {
  const { cart } = useContext(CartContext);
  let price = 0;
  const location = useLocation();
  const checkoutPath = '/cart';
  if (cart.length > 0) {
    cart.forEach((item) => {
      if (item.current_price && item.current_price[0] && item.current_price[0].NGN && item.current_price[0].NGN[0]) {
        const cleanedPrice = item.current_price[0].NGN[0]; // Remove commas
        const numericPrice = parseFloat(cleanedPrice); // Convert to float
        if (!isNaN(numericPrice)) { // Ensure it's a valid number
          const priceWithMarkup = numericPrice * 1.20; // Add 20%
          price += cleanedPrice * item.quantity; // Perform the calculation
        }
      }
    });
  }
  const handleClick = (e) => {
    if (onCheckout) {
      e.preventDefault(); // Prevent default link behavior
      onCheckout();
    }
  };

  return (
    <div className="checkFee">
    <div className="cart-summary border-bot d-flex justify-content-between align-items-center">
      <h6>Cart Summary</h6>
      <h6>{cart.length} item{cart.length !== 1 ? 's' : ''}</h6>
    </div>
    <div className="delivery mt-3 border-bot d-flex justify-content-between align-items-center">
      <h6>Delivery charge</h6>
      <p className="w-50 smallest">Add your delivery address to see your delivery charge</p>
    </div>
    <div className="sub-total mt-3 border-bot d-flex justify-content-between align-items-center">
      <h6>Sub Total</h6>
      <h6><s>N</s>{price.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h6>
    </div>
    <div className="text-danger text-end w-100 smallest">Excluding delivery charge</div>
    <div className="sub-total mt-3 border-bot d-flex justify-content-between align-items-center">
      <h6>Total</h6>
      <h6><s>N</s>{price.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h6>
    </div>
    <div className="mt-3">
      {link ?( <Link to={link == "" ? "" : link} className="text-white text-decoration-none">
        <button className="btn bg-accent rounded text-white w-100" onClick={handleClick}>Checkout</button>
      </Link>):(
                <button className="btn bg-accent rounded text-white w-100" onClick={onCheckout}>Checkout</button>

      )}
     
    </div>
    <div className="pay-cards d-flex justify-content-center gap-3 mt-3 align-items-center">
      <p className="">We Accept</p>
      <div className="pay-cards-opt d-flex gap-3 align-items-center">
        <img src="/images/logos_mastercard.svg" alt="Mastercard" />
        <img src="/images/logos_visaelectron.svg" alt="Visa Electron" />
        <img src="/images/american_express.svg" alt="American Express" />
      </div>
    </div>
  </div>
  );
}
