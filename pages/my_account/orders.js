import axios from 'axios';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import UserLayout from '../../Components/Account/UserLayout';
import Order from '../../Components/Order/Order';
import useAuth from '../../Hooks/useAuth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import { BaseUrl } from '../../Service/BaseUrl';
import Loader from '../../Shared/Loader';
import TopBanner from '../../Shared/TopBanner';

const Orders = () => {
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
    return (
        <>

            <Head>
                <title>Kino | Orders</title>
            </Head>
            <main>
                <TopBanner name="My Account" route="My Account" />
                <div className='cus-container relative'>
                    {loading && <Loader />}
                    <UserLayout>
                        {orders.length === 0 ?
                            <h5 className='text-slate-400'>You currenly haven&#39;t any order!</h5>
                            :
                            <Order orders={orders} />
                        }
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Orders);
