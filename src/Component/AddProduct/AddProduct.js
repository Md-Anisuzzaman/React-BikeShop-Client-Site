import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {

    //useForm  from react form

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:8000/addproduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert("Added another product")
        console.log(data);
    };

    return (

        <div>
            <h1 className="text-center text-success mt-5 mb-5">Add Product Which You like Most</h1>
            <div className=" w-50 m-auto mt-3">
                <div className="">
                    <div className=" p-5 mb-5 ad-fr-box shadow bg-secondary">
                        <form className=" form-login w-100" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="input-field form-control p-2 m-2 w-100 "
                                {...register("model")}
                                placeholder="Model"
                            />

                            <input
                                className=" input-field form-control w-100 p-2 m-2"
                                {...register("details")}
                                placeholder="Details"
                            />

                            <input
                                className="input-field form-control w-100 p-2 m-2 "
                                {...register("img", { required: true })}
                                placeholder="Image link"
                            />

                            <input
                                className="input-field form-control w-100 p-2 m-2"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                            />
                            <br />
                            <input
                                className="btn btn-info w-50"
                                type="submit"
                                value="Add Product"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;