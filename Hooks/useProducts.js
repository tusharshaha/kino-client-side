import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
            const data = await res.json();
            setProducts(data);
        })()
    },[])
    return { products }
};

export default useProducts;