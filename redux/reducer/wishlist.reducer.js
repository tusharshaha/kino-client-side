import Swal from "sweetalert2";
import { ADD_TO_WISHLIST, CLEAR_WISHLIST, REMOVE_FROM_WISHLIST } from "../types";

export default function wishlistReducer(state = [], action) {
    switch (action.type) {
        case (ADD_TO_WISHLIST): {
            const findItem = state.find(ele => ele.id === action.payload.id);
            if (findItem) {
                Swal.fire({
                    icon: "warning",
                    text: "Product already added to wishlist!"
                })
                return [...state]
            }
            const date = new Date().getDate();
            const month = new Date().toLocaleDateString("default", { month: 'long' });
            const year = new Date().getFullYear();
            const wishlistDate = `${month} ${date}, ${year}`;
            Swal.fire({
                icon: "success",
                title: "Successfully added to wishlist",
                showConfirmButton: false,
                timer: 1500
            })
            return [...state, { ...action.payload, date: wishlistDate }]
        }
        case (REMOVE_FROM_WISHLIST): {
            return state.filter(ele => ele.id !== action.payload);
        }
        case (CLEAR_WISHLIST): {
            return [];
        }
        default:
            return state;
    }
}
