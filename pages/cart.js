import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CalcCart from '../Components/Cart/CalcCart';
import CartTable from '../Components/Cart/CartTable';
import { clearCart, removeFromCart } from '../redux/actions/cart.action';
import TopBanner from '../Shared/TopBanner';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();
    // remove cart product
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }
    // clear cart
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <Head>
                <title>Kino | Cart</title>
            </Head>
            <main>
                <TopBanner name="Cart" route="Cart" />
                <div className='cus-container'>
                    {cartItems.items.length > 0 ?
                        <div className='overflow-auto'>
                            <CartTable
                                cartItems={cartItems.items}
                                handleRemove={handleRemove}
                                handleClearCart={handleClearCart}
                            />
                            <h5 className='mt-12 mb-6 font-medium'>Cart Totals</h5>
                            <CalcCart
                                subTotal={cartItems.totalPrice}
                            />
                            <button onClick={() => router.push("/checkout")} className='addr-btn py-4 mt-6 w-[300px]'>Proceed To Checkout</button>
                        </div>
                        :
                        <p className='text-slate-400'>You have no product in cart. <Link href='/products'><a className="text-red-500">Browse Products</a></Link>.</p>
                    }
                </div>
            </main>
        </>
    );
};

export default Cart;