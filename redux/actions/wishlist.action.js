import { ADD_TO_WISHLIST, CLEAR_WISHLIST, REMOVE_FROM_WISHLIST } from "../types";

export function addToWishlist(item) {
    return {
        type: ADD_TO_WISHLIST,
        payload: item
    }
}
export function removeFromWishlist(id) {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: id
    }
}

export function clearWishlist() {
    return { type: CLEAR_WISHLIST }
}