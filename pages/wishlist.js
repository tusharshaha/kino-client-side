import Head from 'next/head';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import WishlistTable from '../Components/Wishlist/WishlistTable';
import { clearWishlist, removeFromWishlist } from '../redux/actions/wishlist.action';
import TopBanner from '../Shared/TopBanner';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id));
    }
    const handleClearWishlist = () => {
        dispatch(clearWishlist());
    }
    return (
        <>
            <Head>
                <title>Kino | Wishlist</title>
            </Head>
            <main>
                <TopBanner name="Wishlist" route="Wishlist" />
                <div className="cus-container">
                    {wishlistItems.length > 0 ?
                        <>
                            <h3 className='font-medium mb-8'>Your Wishlist</h3>
                            <div className='overflow-auto'>
                                <WishlistTable
                                    wishlistItems={wishlistItems}
                                    handleRemove={handleRemove}
                                    handleClearWishlist={handleClearWishlist}
                                />
                            </div>
                        </>
                        :
                        <p className='text-slate-400'>You have no product in wishlist. <Link href='/products'><a className="text-red-500">Browse Products</a></Link>.</p>
                    }
                </div>
            </main>
        </>
    );
};

export default Wishlist;
