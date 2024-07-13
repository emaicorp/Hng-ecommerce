import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (product) => {
    setWishList((prevWishList) => {
      const existingProduct = prevWishList.find(item => item.id === product.id);
      
      if (existingProduct) {
        toast.error('Item already in WishList!');
        return prevWishList;
      } else {
        toast.success('Item added to WishList!');
        return [...prevWishList,{ ...product}];
      }
    });
  };



  const removeFromWishList = (productId) => {
    setWishList((prevWishList) => {
      const updatedWishList = prevWishList.filter(item => item.id !== productId);
      if (updatedWishList.length !== prevWishList.length) {
        toast.success('Item removed from WishList!');
      }
      return updatedWishList;
    });
  };
  const clearWishList = () => {
    setWishList([]);
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList,clearWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
