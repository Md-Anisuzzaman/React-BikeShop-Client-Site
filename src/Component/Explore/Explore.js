import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
    const [bikeItems, setBikeItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/allproduct")
            .then(res => res.json())
            .then(data => setBikeItems(data));
    }, [])
    return (
        <div className="bikeItems-border mb-3">

            <div className="row">
                {
                    // Using-map-function-to-show-data-in-cart

                    bikeItems.map((bike) =>
                        <div className="col-md-4" key={bike.id}>
                            <div className="cart explore-cart mt-5">
                                <div className='div-image'>
                                    <img className="img-fluid img-wrap" src={bike.img} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h5>Model: {bike.model}</h5>
                                    <p>Price: ${bike.price}</p>
                                    <Link to={`/products/${bike._id}`}> <button className="btn product-btn w-100 mb-2">Details</button></Link>
                                    <div className='bottom-div'>
                                        <p className='text-light'>Availble</p>
                                    </div>
                                    {/* <p className="p-4 text-justify"><span className="fw-bold">Details:</span> {service.details}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    )
};

export default Explore;