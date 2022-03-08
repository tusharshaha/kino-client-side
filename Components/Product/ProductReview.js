import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { BaseUrl } from '../../Service/BaseUrl';
import Review from './Review';

const ProductReview = ({ productRev, setChange, product }) => {
    const [rating, setRating] = useState(null);
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(false);
    const router = useRouter();
    const { user } = useAuth();
    const date = new Date().getDate();
    const month = new Date().toLocaleDateString("default", { month: 'long' });
    const year = new Date().getFullYear()
    const revDate = `${month} ${date}, ${year}`

    // getting product id
    const productId = router.query.productId;
    // cofiguring review body
    const revBody = {
        email: user.email,
        name: user.displayName,
        userImg: user.photoURL || '',
        productId,
        rating,
        review,
        revDate
    }
    const ratingChanged = (newRating) => {
        setRating(newRating);
    }
    const handleSubmitReview = async () => {
        if (!rating || !review) {
            return Swal.fire({
                icon: "warning",
                title: "Give a Review First!"
            })
        }
        if (user.email) {
            setLoading(true);
            const res = await axios.post(`${BaseUrl}/review`, revBody);
            const data = await res.data;
            if (data.acknowledged) {
                Swal.fire({
                    icon: "success",
                    title: "Review Send Successfully!",
                    showConfirmButton: false,
                    timer: 2000
                })
                setRating(null);
                setReview('');
                setLoading(false);
                setChange(prev => !prev);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Something Went Wrong! Try Again",
                    showConfirmButton: false,
                    timer: 2000
                })
                setLoading(false);
            }
        } else {
            Swal.fire({
                icon: "warning",
                title: "You must login first!",
            })
        }
    }
    return (
        <div>
            {!productRev.length ?
                <>
                    <h5 className='font-medium'>Reviews</h5>
                    <p className='text-slate-400 my-4'>There are no review yet</p>
                    <p className='font-bold text-[17px] border-b-2 border-slate-400 pb-3'>Be the first to review “{product.name}”</p>
                </>
                :
                <>
                    <div className='flex flex-col mb-8 gap-8'>
                        {view ?
                            productRev.map(r => <Review key={r._id} review={r} />)
                            :
                            productRev.slice(0, 4).map(r => <Review key={r._id} review={r} />)
                        }
                    </div>
                    {productRev.length > 4 &&
                        <button onClick={() => setView(!view)} className='font-bold text-red-500 mb-6'>
                            {view ? "Show Less.." : "View More.."}
                        </button>
                    }

                    <p className='font-bold text-[18px] border-b-2 border-slate-400 pb-3'>Add a review</p>
                </>
            }
            <p className='after:content-["*"] after:text-red-500 after:ml-1 mt-8'>Your Rating</p>
            <div className='flex items-center gap-2'>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    emptyIcon={<FaRegStar />}
                    halfIcon={<FaStarHalfAlt />}
                    fullIcon={<FaStar />}
                    activeColor="#ffd700"
                    isHalf={true}
                    color="#bebcbc"
                />
                {rating && <span className='font-bold text-slate-400'>({rating})</span>}
            </div>
            <p className='after:content-["*"] after:text-red-500 after:ml-1 mt-4 mb-2'>Your Review</p>
            <textarea onChange={(e) => setReview(e.target.value)} value={review} className='input text-[17px]' cols="620" rows="8"></textarea>
            <button onClick={handleSubmitReview} className='acc-btn rounded-full mt-8 uppercase'>Submit</button>

            {loading && <h4 className='mt-4 text-center text-blue-400 animate-pulse'>Loading...</h4>}
        </div>
    );
};

export default ProductReview;