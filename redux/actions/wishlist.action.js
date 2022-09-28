import wishlistTypes from "../types";

export function addToWishlist(item) {
    return {
        type: wishlistTypes.ADD_TO_STORE,
        payload: item
    }
}
export function removeFromWishlist(id) {
    return {
        type: wishlistTypes.REMOVE_FROM_STORE,
        payload: id
    }
}