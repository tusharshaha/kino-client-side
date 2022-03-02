// get stored prouduct
const getCart = () => JSON.parse(localStorage.getItem("cart"));
// add product to store
const addToCart = (product) => {
    const cart = getCart();
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify(product));
    } else {
        if (cart[product]) {
            cart[product] = 1;
        } else {
            cart[product] += 1;
        }
    }
}
const removeFromCart = () => {

}