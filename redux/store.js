import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import cartReducer from "./reducer/cart.reducer";
import wishlistReducer from "./reducer/wishlist.reducer";

// comine all reducer with root reducer
const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer
})

// configure redux persist
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    composeWithDevTools()
);

export const persistor = persistStore(store);
export default store;