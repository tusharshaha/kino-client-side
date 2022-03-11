import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import BillAdd from '../Components/Address/BillAdd';
import YourOrder from '../Components/Checkout/YourOrder';
import useAuth from '../Hooks/useAuth';
import useGStore from '../Hooks/useGStore';
import useProducts from '../Hooks/useProducts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { BaseUrl } from '../Service/BaseUrl';
import Loader from '../Shared/Loader';
import TopBanner from '../Shared/TopBanner';

const Checkout = () => {
    const { user } = useAuth();
    const [cartItem, setCartItem] = useState([]);
    const [billInfo, setBillInfo] = useState({});
    const [update, setUpdate] = useState(false);
    const [accordion, setAccordion] = useState('bank');
    const [loading, setLoading] = useState(false);
    const { getStore, clearStore } = useGStore();
    const { products } = useProducts();
    const router = useRouter();
    // get the cart product
    useEffect(() => {
        const cart = getStore("cart")
        const storedCart = [];
        if (cart) {
            for (const key in cart) {
                const addedProduct = products.find(p => p._id === key);
                if (addedProduct) {
                    addedProduct.qty = cart[key];
                    storedCart.push(addedProduct);
                }
            }
            setCartItem(storedCart);
        }
    }, [products, update])
    // set order date
    const date = new Date().getDate();
    const month = new Date().toLocaleDateString("default", { month: 'long' });
    const year = new Date().getFullYear()
    const orderDate = `${month} ${date}, ${year}`
    // set the order document
    const items = cartItem.map(item => {
        return {
            productId: item._id,
            pName: item.name,
            price: item.curPrice,
            qty: item.qty,
        }
    });
    const orders = {
        userEmail: user.email,
        date: orderDate,
        payment: accordion === "bank" ? "Direct Bank Transfer" : accordion === "check" ? "Check Payment" : "Cash on Delivery",
        status: "Processing",
        orders: items,
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
        if (!billInfo.FName || !billInfo.LName || !billInfo.country || !billInfo.street1 || !billInfo.street2 || !billInfo.phone || !billInfo.post_code || !billInfo.city) {
            return Swal.fire({
                icon: 'warning',
                title: "Please Complete Required Field"
            })
        }
        if (user.emailVerified) {
            setLoading(true);
            axios.post(`${BaseUrl}/order`, orders)
                .then(res => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Placed Your Order",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        clearStore("cart");
                        setUpdate(!update);
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
    // this is subtotal count
    const subTotalCount = cartItem.map(item => item.curPrice * item.qty);
    // get total subtotal
    const subTotal = subTotalCount.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);

    return (
        <>
            {loading && <Loader />}
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
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Checkout);