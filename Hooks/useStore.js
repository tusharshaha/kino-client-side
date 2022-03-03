import React, { useState } from 'react';
import Swal from 'sweetalert2';

const useStore = () => {
    // get stored prouduct
    const getStore = (store = "cart") => JSON.parse(localStorage.getItem(store));
    // updating store
    const updateStore = (store = "cart", products) => {
        localStorage.setItem(store, JSON.stringify(products));
        if (store === "cart") {
            const cartLength = Object.keys(products).length;
            setCartNum(cartLength)
        }
    }
    // setting cart number
    const [cartNum, setCartNum] = useState(
        Object.keys(getStore("cart") || {}).length
    );
    // add product to cart
    const addToCart = (id, qty) => {
        const products = getStore("cart");
        let orders = {}
        if (!products) {
            orders[id] = qty || 1
        } else {
            orders = products;
            if (orders[id]) {
                const newCount = qty || (orders[id] + 1);
                orders[id] = newCount;
            } else {
                orders[id] = qty || 1;
            }
        }
        updateStore("cart", orders);
        Swal.fire({
            icon: "success",
            title: "Product Added to Cart.",
            showConfirmButton: false,
            timer: 1700
        })
    }
    // add product to wishlist
    const addToWishlist = (id, date) => {
        const products = getStore("wishlist");
        let orders = {}
        if (!products) {
            orders[id] = date;
        } else {
            orders = products
            if (!orders[id]) {
                orders[id] = date;
            } else {
                return Swal.fire({
                    icon: "warning",
                    title: "Item Already Added to Wishlist!"
                })
            }
        }
        updateStore("wishlist", orders)
    }
    // remove product from store
    const removeStore = (store = "cart", id) => {
        const products = getStore(store) || {};
        if (products[id]) {
            delete products[id]
            updateStore("cart", products)
        }
    }
    // clear all from localstorage
    const clearStore = (store) => {
        localStorage.removeItem(store);
    }

    return { getStore, addToCart, addToWishlist, removeStore, clearStore, cartNum, setCartNum }
};

export default useStore;
