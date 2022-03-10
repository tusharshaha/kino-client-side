import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';
import BillDetails from '../../../Components/Order/BillDetails';
import OrderTable from '../../../Components/Order/OrderTable';
import useOrder from '../../../Hooks/useOrder';
import TopBanner from '../../../Shared/TopBanner';

const OrderDetails = () => {
    const router = useRouter();
    const orderId = router.query.orderId;
    const { orders } = useOrder();
    const singleOrder = orders.find(order => order._id === orderId);
    const subtotalCount = singleOrder?.orders.map(ele => ele.price * ele.qty);
    const subTotal = subtotalCount?.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);
    return (
        <>
            <Head>
                <title>Kino | Order Details</title>
            </Head>
            <main>
                <TopBanner name="My Account" route="My Account" />
                <div className="cus-container">
                    <UserLayout>
                        <div>
                            <p className="text-slate-400">Order <span className='bg-amber-100 text-slate-700'>{singleOrder?._id}</span> was placed on <span className='bg-amber-100 text-slate-700'>{singleOrder?.date}</span> and is currently <span className='bg-amber-100 text-slate-700'>{singleOrder?.status}</span>.</p>
                            <OrderTable
                                orders={singleOrder?.orders}
                                subTotal={subTotal}
                                payment={singleOrder?.payment}
                            />
                        </div>
                        <BillDetails bill={singleOrder?.billInfo}/>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default OrderDetails;