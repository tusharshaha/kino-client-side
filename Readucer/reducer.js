import Swal from "sweetalert2";
import useStore from "../Hooks/useStore";

const Reducer = (id, qty = 1, date) => {
    const { addToCart, addToWishlit, clearStore } = useStore();
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                if (action.store === "cart") {
                    state.map((product, i) => {
                        if (!product[id]) {
                            addToCart([...state, { [id]: qty }]);
                            return [...state, { [id]: qty }];
                        } else {
                            state[i] = qty;
                            return [...state];
                        }
                    });
                } else {
                    state.map(product => {
                        if (!product[id]) {
                            addToWishlit([...state, { [id]: date }]);
                            return [...state, { [id]: date }];
                        } else {
                            return Swal.fire({
                                icon: "warning",
                                title: "Product already added to wishlist!"
                            })
                        }
                    })
                }
            case "REMOVE":
                if (action.store === "cart") {
                    clearStore("cart")
                    return;
                } else {
                    clearStore("wishlist");
                    return;
                }
            default: {
                return state;
            }
        }
    };
    return reducer;
}

export default Reducer;