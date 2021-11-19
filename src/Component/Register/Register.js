import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {

    const { user, registerUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        registerUser(data.email, data.password, data.name);
        console.log(data);
    };
    return (
        <div className="mt-5 mb-5">
            <h1 className='mb-5'>Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="mb-3 w-25"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    type="name"

                />
                <br />
                <input
                    className="mb-3 w-25"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Email"
                    type="email"

                />
                <br />
                <input
                    className="mb-3 w-25"
                    {...register("password", { required: true })}
                    name="password"
                    type="password"
                    placeholder="Password"

                />
                <br />
                <input
                    className="submit-btn btn btn-info fs-5 mb-3"
                    type="submit"
                    value="Register"
                />
            </form>
            <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} to='/login'>Already Registered? Please Login</NavLink>
        </div>
    );
};

export default Register;