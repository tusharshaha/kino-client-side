const { default: Swal } = require("sweetalert2");

// get stored prouduct
const getStore = (store = "cart") => JSON.parse(localStorage.getItem(store) || "[]");

// update Store
const updateStore = (store = "cart", productId) => {
    localStorage.setItem(store, JSON.stringify(productId));
}

// add product to cart
const addToCart = (productId, quantity) => {
    const cart = getStore("cart");
    let product = {};
    if (!cart) {
        product[id] = 1
    } else {
        product = cart;
        if (!cart[productId]) {
            product[productId] = 1;
        } else {
            product[productId] += quantity || 1;
        }
    }
    updateStore("cart", product);
}
const addToWishlit = (productId, Date) => {
    const wishlist = getStore("wishlist");
    let product = {};
    if (!wishlist) {
        product[productId] = Date;
    } else {
        product = wishlist;
        if (!wishlist[productId]) {
            product[productId] = Date;
        } else {
            return Swal.fire({
                icon: "warning",
                title: "Product Already Added to Cart!"
            })
        }
    }
    updateStore("wishlist", product);
}
// clear all from localstorage
const clearStore = (store) => {
    localStorage.removeItem(store);
}

export { getStore, clearStore, addToCart, addToWishlit }