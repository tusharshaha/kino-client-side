import { ADD_TO_STORE, CLEAR_STORE, REMOVE_FROM_STORE, UPDATE_QTY } from "../types";

const initCart = {
    items: [],
    totalQty: 0,
    totalPrice: 0
}
function updateCartTotal(state) {
    const total = state.reduce((cartTotal, cartItem) => {
        const { price, qty } = cartItem;
        const subTotal = price * qty;
        cartTotal.totalQty += qty;
        cartTotal.totalPrice += subTotal;
        return totalPrice
    }, { totalPrice: 0, totalQty: 0 });
    return total
}
function updateItems(state, id, qty) {
    state.forEach(ele => {
        if (!id || !qty) {
            ele.qty += 1;
            ele.subTotal = ele.price * ele.qty;
        } else {
            if (ele.id === id) {
                ele.qty = qty;
                subTotal = ele.price * ele.qty
            }
        }
    });
    return state
}
export default function cartReducer(state = initCart, action) {
    switch (action.type) {
        case (ADD_TO_STORE): {
            const findItem = state.items.find(ele => ele.id === action.payload.id);
            if (findItem) {
                const prevItems = [...state];
                const updatedItem = updateItems(prevItems);
                const { totalPrice, totalQty } = updateCartTotal(updatedItem);
                return {
                    items: updatedItem,
                    totalQty,
                    totalPrice
                }
            } else {
                const newItem = {
                    ...action.payload,
                    subTotal: action.payload.price
                }
                const { totalPrice, totalQty } = updateCartTotal(state.items);
                return {
                    items: [...state.items, newItem],
                    totalQty,
                    totalPrice
                };
            }
        }
        case (UPDATE_QTY): {
            const prevItems = [...state.items]
            const updatedItem = updateItems(prevItems, action.id, action.qty);
            const { totalPrice, totalQty } = updateCartTotal(updatedItem);
            return {
                items: updatedItem,
                totalQty,
                totalPrice
            }
        }
        case (REMOVE_FROM_STORE): {
            const newState = state.items.filter(ele => ele.id !== action.payload);
            const totalPrice = updateCartTotal(state.items);
            return {
                items: newState,
                totalPrice
            };
        }
        case (CLEAR_STORE):
            return initCart;
        default:
            return state
    }
}