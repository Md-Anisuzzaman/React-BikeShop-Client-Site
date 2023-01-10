import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:8000/makeAdmin", {
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
            <h1 className="text-center text-success mt-5 mb-5">Make Admin</h1>
            <div className=" w-25 m-auto mt-3">
                <div className=" ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="input-field p-2 m-2 w-100 "
                                {...register("email")}
                                placeholder="Email"
                            />

                            <br />

                            <input
                                className="input-field p-2 m-2 w-100 "
                                {...register("password")}
                                placeholder="Password"
                            />
                            <input
                                className="btn btn-warning mt-5 mb-5 w-75"
                                type="submit"
                                value="Authorized Admin"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;