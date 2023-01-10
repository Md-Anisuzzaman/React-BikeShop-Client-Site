import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Review.css'

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/allreview")
            .then(res => res.json())
            .then(data => setreviews(data));
    }, [])
    return (
        <div className=" review-body mb-3">
            <h1 className="mt-5">User Reviews</h1>
            <div className="row">
                {
                    // Using-map-function-to-show-data-in-cart
                    reviews.map(review =>
                        <div className="col-md-3" key={review.id}>
                            <div className="cart review-cart m-3 mt-5">
                                <div>
                                    <img className="w-50 p-2" src={review.img} alt="" />
                                </div>
                                <div className=" review-text pb-3">
                                    <p className=''>"{review.review.slice(0, 100)}"</p>
                                    <Rating
                                        readonly
                                        initialRating={review.ratings}
                                        emptySymbol="far fa-star star-color "
                                        fullSymbol="fas fa-star star-color"
                                    >
                                    </Rating>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    )
};

export default Reviews;