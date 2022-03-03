import React, { useContext } from 'react';
import { storeContext } from '../Context/StorePriovider';

const useGStore = () => {
    return useContext(storeContext);
};

export default useGStore;