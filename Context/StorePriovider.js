import React, { createContext } from 'react';
import useStore from '../Hooks/useStore';


export const storeContext = createContext();
const StoreProvider = ({ children }) => {
    const allContext = useStore();
    return (
        <storeContext.Provider value={allContext}>
            {children}
        </storeContext.Provider>
    )
};

export default StoreProvider;