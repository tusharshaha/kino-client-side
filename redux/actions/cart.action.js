import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_QTY } from "../types"

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export function updateQty(id, qty) {
    return {
        type: UPDATE_QTY,
        id,
        qty
    }
}
export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export function clearCart() {
    return { type: CLEAR_CART }
}