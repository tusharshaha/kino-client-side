import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';

const ProductReview = () => {
    const [rating, setRating] = useState(null);
    const ratingChanged = (newRating) => {
        setRating(newRating);
    }
    return (
        <div>
            <h5 className='font-medium'>Reviews</h5>
            <p className='text-slate-400 my-4'>There are no review yet</p>
            <p className='font-bold text-[17px] border-b-2 border-slate-400 pb-3'>Be the first to review “Hand Sanitizer Covid -19”</p>
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
            <textarea className='input' cols="700" rows="8"></textarea>
            <button className='acc-btn rounded-full mt-8 uppercase'>Submit</button>
        </div>
    );
};

export default ProductReview;