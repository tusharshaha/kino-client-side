import Swal from "sweetalert2";
import { ADD_TO_STORE, CLEAR_STORE, REMOVE_FROM_STORE } from "../types";

export default function wishlistReducer(state = [], action) {
    switch (action.type) {
        case (ADD_TO_STORE): {
            const findItem = state.find(ele => ele.id === action.payload.id);
            if (findItem) {
                return Swal.fire({
                    icon: "warning",
                    text: "Product already added to wishlist!"
                })
            }
            const date = new Date().getDate();
            const month = new Date().toLocaleDateString("default", { month: 'long' });
            const year = new Date().getFullYear();
            const wishlistDate = `${month} ${date}, ${year}`;
            return [...state, { ...action.payload, date: wishlistDate }]
        }
        case (REMOVE_FROM_STORE): {
            return state.filter(ele => ele.id !== action.payload);
        }
        case (CLEAR_STORE): {
            return [];
        }
        default:
            return state;
    }
}