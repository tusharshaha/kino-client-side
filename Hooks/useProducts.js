import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../Service/BaseUrl';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const res = await axios.get(`${BaseUrl}/products`);
            setProducts(res.data);
        })()
    },[])
    return { products }
};

export default useProducts;