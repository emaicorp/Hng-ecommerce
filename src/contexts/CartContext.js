// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        toast.error('Item already in cart!');
        return prevCart; // Item already exists, no changes needed
      } else {
        toast.success('Item added to cart!');
        return [...prevCart, product]; // Add new item to cart
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
