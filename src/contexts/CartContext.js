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
        return prevCart;
      } else {
        toast.success('Item added to cart!');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      if (updatedCart.length !== prevCart.length) {
        toast.success('Item removed from cart!');
      }
      return updatedCart;
    });
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
