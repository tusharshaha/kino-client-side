// get stored prouduct
const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
// add product to store
const addToCart = (product)=>{
    const cart = getCart();
    if(!cart){
        localStorage.setItem('cart', JSON.stringify(product));
    }else{

    }
}