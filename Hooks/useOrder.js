import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const res = await axios.get(`/api/v1/orders/${user.email}`);
            const data = await res.data.orders;
            setOrders(data);
            setLoading(false);
        })()
    }, [user.email])
    return {
        orders,
        loading
    }
};

export default useOrder;