import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BaseUrl } from '../Service/BaseUrl';
import useAuth from './useAuth';

const useOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const res = await axios.get(`${BaseUrl}/orders/${user.email}`)
            const data = await res.data;
            setOrders(data)
            setLoading(false);
        })()
    }, [user.email])
    return {
        orders,
        loading
    }
};

export default useOrder;