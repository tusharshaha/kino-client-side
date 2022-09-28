import cartTypes from "../types"

export function addToCart(item) {
    return {
        type: cartTypes.ADD_TO_STORE,
        payload: item
    }
}
export function updateQty(id, qty) {
    return {
        type: cartTypes.UPDATE_QTY,
        id,
        qty
    }
}
export function removeFromCart(id) {
    return {
        type: cartTypes.REMOVE_FROM_STORE,
        payload: id
    }
}

export function clearCart() {
    return { type: cartTypes.CLEAR_STORE }
}