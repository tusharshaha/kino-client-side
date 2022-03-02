import React, { useState } from 'react';

const useStore = () => {
    // get stored prouduct
    const getStore = (store = "cart") => JSON.parse(localStorage.getItem(store) || "[]");
    // setting cart number
    const [cartNum, setCartNum] = useState(getStore("cart").length);
    // add product to cart
    const addToCart = (arr) => {
        localStorage.setItem('cart', JSON.stringify(arr));
    }
    const addToWishlit = (arr) => {
        localStorage.setItem('wishlist', JSON.stringify(arr));
    }
    // clear all from localstorage
    const clearStore = (store) => {
        localStorage.removeItem(store);
    }

    return { addToCart, addToWishlit, clearStore, cartNum, setCartNum }
};

export default useStore;
