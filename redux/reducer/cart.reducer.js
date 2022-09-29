import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_QTY } from "../types";

const initCart = {
    items: [],
    totalPrice: 0,
    count: 0
}
function updateCartTotal(state) {
    const total = state.reduce((cartTotal, cartItem) => {
        const { price, qty } = cartItem;
        const subTotal = price * qty;
        cartTotal.count += qty;
        cartTotal.totalPrice += subTotal;
        return cartTotal
    }, { totalPrice: 0, count: 0 });
    return total
}

export default function cartReducer(state = initCart, action) {
    switch (action.type) {
        case (ADD_TO_CART): {
            const prevItems = [...state.items];
            const findItem = prevItems.find(ele => ele.id === action.payload.id);
            if (findItem) {
                prevItems.forEach(ele => {
                    if (ele.id === action.payload.id) {
                        if (action.payload.qty > 1) {
                            ele.qty = action.payload.qty
                        } else {
                            ele.qty += 1;
                        }
                        ele.subTotal = ele.price * ele.qty
                    }
                })
                const { totalPrice, count } = updateCartTotal(prevItems);
                return {
                    items: prevItems,
                    totalPrice,
                    count
                }
            } else {
                const newItem = {
                    ...action.payload,
                    subTotal: action.payload.price * action.payload.qty
                }
                const prevItems = [...state.items, newItem];
                const { totalPrice, count } = updateCartTotal(prevItems);
                return {
                    items: prevItems,
                    totalPrice,
                    count
                };
            }
        }
        case (UPDATE_QTY): {
            const prevItems = [...state.items]
            prevItems.forEach(ele => {
                if (ele.id === action.id) {
                    ele.qty = action.qty;
                    ele.subTotal = ele.price * action.qty
                }
            });
            const { totalPrice, count } = updateCartTotal(prevItems);
            return {
                items: prevItems,
                totalPrice,
                count
            }
        }
        case (REMOVE_FROM_CART): {
            const newState = state.items.filter(ele => ele.id !== action.payload);
            const { totalPrice, count } = updateCartTotal(newState);
            return {
                items: newState,
                totalPrice,
                count
            };
        }
        case (CLEAR_CART):
            return initCart;
        default:
            return state
    }
}