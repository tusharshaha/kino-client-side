import Head from 'next/head';
import React from 'react';
import UserLayout from '../../Components/Account/UserLayout';
import Order from '../../Components/Order/Order';
import useOrder from '../../Hooks/useOrder';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Loader from '../../Shared/Loader';
import TopBanner from '../../Shared/TopBanner';

const Orders = () => {
    const { orders, loading } = useOrder();
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
