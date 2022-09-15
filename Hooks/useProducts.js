import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/v1/products");
            const data = await res.data.products
            const suffleProducts = data.sort(() => Math.random() - 0.5)
            setProducts(suffleProducts);
        })()
    }, [])
    return { products }
};

export default useProducts;