import React, { useEffect, useState } from 'react';
import './Review.css'

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allreview")
            .then(res => res.json())
            .then(data => setreviews(data));
    }, [])
    return (
        <div className="mb-3">
            <h1 className="mt-5">User's Reviews</h1>
            <div className="row">
                {
                    // Using-map-function-to-show-data-in-cart
                    reviews.map(review =>
                        <div className="col-md-3" key={review.id}>
                            <div className="cart review-cart m-3 mt-5">
                                <div>
                                    <img className="img-fluid  w-100 p-2" src={review.img} alt="" />
                                </div>
                                <div className="mt-2">
                                    <p>{review.review.slice(0, 100)}</p>
                                    <p>{review.ratings}</p>
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