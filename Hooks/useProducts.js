import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/v1/products");
            setProducts(res.data.products);
        })()
    }, [])
    return { products }
};

export default useProducts;