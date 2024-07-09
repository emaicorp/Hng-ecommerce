import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import * as Icon from 'iconsax-react';


export default function CartItem() {
    const { cart } = useContext(CartContext);
     const calculateIncreasedPrice = (priceString, percentage) => {
        const price = parseFloat(priceString.replace(/,/g, '').replace('N', '')); // Convert string to a number
        if (isNaN(price)) {
          return 'Invalid price';
        }
        const increasedPrice = price * (1 + percentage / 100);
        return 'N' + increasedPrice.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      };
    return (
        <div className="cart-div">
              {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
          
             
          
        
            <div className='border-bot cart-item-div mb-3' key={index}>
                <div className="cart-item d-flex   justify-content-between ">
                    <div className="cart-item-img d-flex gap-3">
                        <img src={item.imgUrl} alt="" height={100} width={100} />
                        <div className="card-item-text">
                            <h6>{item.name}</h6>
                            <p>In Stock</p>
                        </div>
                    </div>
                    <div className="cart-item-details">

                        <h6><s>N</s>{item.price}</h6>
                        <p className="d-flex justify-content-between align-items-center">
                            <s>{calculateIncreasedPrice(item.price, 21)}</s>
                            <p className="bg-main rounded smallest p-1 opacity-50">-20</p>
                        </p>
                        <div className="quantity d-flex gap-3">
                            <div className="plus btn bg-main text-white p-1">
                                <Icon.Add size="25" />

                            </div>
                            <span>1</span>
                            <div className="minus btn bg-main text-white p-1">
                                <Icon.Minus size="25" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cart-item-actions d-flex gap-3">
                    <button className="btn primary-border smallest">Remove</button>
                    <button className="btn primary-border smallest">Save For Later</button>
                </div>
            </div>

              ))
            )}
            
        </div>
    )
}