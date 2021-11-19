import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddReview.module.css'

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addreview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h2 className="mt-5  text-primary">Please Add Review</h2>
            <div className=" w-25 m-auto mt-3">
                <div className=" ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="{styles.input-field} p-2 m-2 w-100 "
                                {...register("review")}
                                placeholder="Please add review"
                            />
                            <input
                                className="{styles.input-field} p-2 m-2 w-100 "
                                {...register("img")}
                                placeholder="Image"
                            />

                            <input
                                className="{styles.input-field} w-100 p-2 m-2"
                                {...register("ratings")}
                                placeholder="Rating"

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