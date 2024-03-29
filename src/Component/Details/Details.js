import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Details = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState({});

    const { productId } = useParams();
    //console.log(productId);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {
        data.email = user?.email;
        fetch("http://localhost:8000/addOrderItem", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        console.log(data);
        reset();
        window.confirm("Your order ready to placed,.. Are you agree?")
        e.preventDefault();

    };

    useEffect(() => {
        fetch(`http://localhost:8000/singleProduct/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);

    return (
        <div className="details-container mt-5 mb-5 p-5">
            <div className="row container">
                <div className="col-md-7">
                    <img className="w-50" src={product.img} alt="" />
                    <h4>{product.model}</h4>
                    <p>Details: {product.details}</p>
                    <h5>Price: ${product.price}</h5>
                </div>
                <div className="col-md-5 border border-dark">
                    <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="input-field p-2 m-2 w-100 "
                            {...register("model")}
                            placeholder="Model"
                            defaultValue={product.model}
                        />

                        <input
                            className=" input-field w-100 p-2 m-2"
                            {...register("name")}
                            placeholder="Name"
                        />

                        <input
                            className="input-field w-100 p-2 m-2 "
                            {...register("email")}
                            placeholder="Email"
                            defaultValue={user.email}
                        />
                        <input
                            className="input-field w-100 p-2 m-2 "
                            {...register("address")}
                            placeholder="Address"
                        />

                        <input
                            className="input-field w-100 p-2 m-2"
                            {...register("price")}
                            placeholder="Price"
                            defaultValue={product.price}

                        />
                        <br />
                        <input
                            className="btn btn-warning mt-5 mb-5 w-50"
                            type="submit"
                            value="Order Now"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Details;