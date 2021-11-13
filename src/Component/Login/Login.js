import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import '../AddProduct/AddProduct.css'

const Login = () => {
    const { loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log(redirect_url);



    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        loginUser(data.email, data.password);
        console.log(data);
    };

    // const handleSignIn = () => {
    //     loginUser()
    //         .then((result) => {
    //             history.push(redirect_url);
    //         });
    // }


    return (
        <div className="mt-5 mb-5">
            <h1 className='mb-5'>Login form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field mb-3 w-25"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className=" input-field mb-3 w-25"
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <br />
                <input
                    className="submit-btn btn btn-primary mb-3 fs-5"
                    type="submit"
                    value="Login"
                    // onClick={handleSignIn}
                />
            </form>
            <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} to='/register'>Not Yet Registered? Please Register</NavLink>
        </div>
    );
};

export default Login;