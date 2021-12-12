import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddReview.module.css'

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch("https://morning-taiga-95639.herokuapp.com/addreview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        alert("Review added Successfully");
        reset();
    };
    return (
        <div>
            <h2 className="mt-5  text-primary">Add Your Review</h2>
            <div className=" w-25 m-auto mt-3">
                <div className=" ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="{styles.input-field} p-2 m-2 w-100 "
                                {...register("review")}
                                placeholder="your comment"
                            />
                            <input
                                className="{styles.input-field} p-2 m-2 w-100 "
                                {...register("img")}
                                placeholder="Your image"
                            />

                            <input
                                className="{styles.input-field} w-100 p-2 m-2"
                                {...register("ratings")}
                                placeholder="Input rating number"

                            />
                            <br />

                            <input
                                className="btn btn-info mt-5 mb-5 w-50"
                                type="submit"
                                value="Add Review"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;