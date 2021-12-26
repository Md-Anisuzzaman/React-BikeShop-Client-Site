import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import '../AddProduct/AddProduct.css'

const Login = () => {
    const { loginUser, user } = useAuth();


    let history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from?.pathname || '/home';
    console.log(redirect_url);

    useEffect(() => {
        if (user.email) {
            history.replace(redirect_url);
        }
    }, [user])


    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        loginUser(data.email, data.password);
        console.log(data, location, history);
        history.replace(redirect_url);
    };

    return (
        <div className="mt-5 mb-5">
            <h1 className='mb-5'>Login form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field mb-3 w-25"
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete='off'
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className=" input-field mb-3 w-25"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete='off'
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