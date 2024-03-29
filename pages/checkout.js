import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import BillAdd from '../Components/Address/BillAdd';
import YourOrder from '../Components/Checkout/YourOrder';
import useAuth from '../Hooks/useAuth';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import TopBanner from '../Shared/TopBanner';
import { clearCart } from '../redux/actions/cart.action';

const Checkout = () => {
    const { user } = useAuth();
    const cartItem = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [billInfo, setBillInfo] = useState({});
    const [accordion, setAccordion] = useState('bank');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    // set order date
    const date = new Date().getDate();
    const month = new Date().toLocaleDateString("default", { month: 'long' });
    const year = new Date().getFullYear()
    const orderDate = `${month} ${date}, ${year}`
    // set the order document
    const items = cartItem.map(item => {
        return {
            productId: item.id,
            pName: item.name,
            price: item.price,
            qty: item.qty,
        }
    });

    const { subTotal, totalQty } = items.reduce((cartTotal, item) => {
        const { price, qty } = item;
        const totalPrice = price * qty;
        cartTotal.subTotal += totalPrice
        cartTotal.totalQty += qty;
        return cartTotal
    }, { subTotal: 0, totalQty: 0 })

    const orders = {
        userEmail: user.email,
        date: orderDate,
        payment: accordion === "bank" ? "Direct Bank Transfer" : accordion === "check" ? "Check Payment" : "Cash on Delivery",
        status: "Processing",
        orders: items,
        subTotal,
        totalQty,
        billInfo
    };
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBill = { ...billInfo };
        newBill[field] = value;
        newBill.email = newBill.email || user.email;
        setBillInfo(newBill);
    }
    // submit user order
    const handleSubmitOrder = () => {
        if (!billInfo.FName || !billInfo.LName || !billInfo.country || !billInfo.street1 || !billInfo.phone || !billInfo.post_code || !billInfo.city) {
            return Swal.fire({
                icon: 'warning',
                title: "Please Complete Required Field"
            })
        }
        if (user.emailVerified) {
            setLoading(true);
            axios.post("/api/v1/orders", orders)
                .then(res => {
                    const order = res.data.order;
                    if (accordion === "bank") {
                        axios.post("/api/v1/payment", order)
                            .then(res => {
                                window.location.replace(res.data.URL)
                            })
                    } else {
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Placed Your Order",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        dispatch(clearCart());
                        router.push("/my_account/orders");
                    }
                }).finally(() => setLoading(false));
        } else {
            return Swal.fire({
                icon: "warning",
                title: "Please Verify Your Email!",
                text: "You can verify your email from your dashboard. In the dashboard you will found verify email option. Then click the button after verification you can checkout your order"
            })
        }
    }

    return (
        <>
            <Head>
                <title>Kino | Checkout</title>
            </Head>
            <main>
                <TopBanner route="Checkout" name="Checkout" />
                <div className='cus-container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <BillAdd handleBlur={handleBlur} order="order" />
                            <div className='mt-8'>
                                <h5 className='font-medium border-b-2 pb-3 mb-4'>Additional information</h5>

                                <label className='flex flex-col gap-2'>
                                    <span className="cursor-pointer">Orders Notes (optional)</span>
                                    <textarea
                                        onBlur={handleBlur}
                                        className='input'
                                        name='orderN'
                                        cols="10"
                                        rows="3"
                                        placeholder='Notes about your order, e.g. special notes for delivery'
                                    />
                                </label>
                            </div>
                        </div>
                        {/* this is order detail section  */}
                        <YourOrder
                            submitOrder={handleSubmitOrder}
                            accordion={accordion}
                            setAccordion={setAccordion}
                            subTotal={subTotal}
                            cartItem={cartItem}
                            loading={loading}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Checkout);