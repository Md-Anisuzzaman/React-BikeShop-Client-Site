import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://morning-taiga-95639.herokuapp.com/allproduct")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="productItems-border">

            <div className="row">

                <h1 className="mt-5">Our Collections</h1>
                {
                    // Using-map-function-to-show-data-in-cart

                    products.map((product, index) => index < 6 &&
                        <div className="col-md-4 mt-3" key={product.id}>
                            <div className="cart poduct-cart mt-4 mb-2">
                                <div className='div-image'>
                                    <img className="img-wraping" src={product.img} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h5>Model:  {product.model}</h5>
                                    <p>Price:  ${product.price}</p>
                                    <Link to={`/products/${product._id}`}> <button className="btn product-btn w-100 mb-2">Details</button></Link>
                                    {/* <p className="p-4 text-justify"><span className="fw-bold">Details:</span> {service.details}</p> */}
                                    <div className='bottom-div'>
                                        <p className='text-light'>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    )
};

export default Product;