import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            setProducts(data);
        })()
    },[])
    return { products }
};

export default useProducts;