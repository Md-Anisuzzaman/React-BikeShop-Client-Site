import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import '../AddProduct/AddProduct.css'
import login_avatar from '../../Images/avatar1.svg';
// import login_wave from '../../Images/wave1.png';
import login_bg from '../../Images/login-bg.svg'
// import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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


    // const { register, handleSubmit, reset } = useForm();
    const handleSubmit = (e,email,password) => {
        e.preventDefault();
        console.log(email,password);
        loginUser(email,password);
        history.replace(redirect_url);
    };
    // const handleSubmit = (data) => {
    //     loginUser(data.email, data.password);
    //     console.log(data, location, history);
    //     history.replace(redirect_url);
    // };

    return (
        <div>
            <div>
                {/* <img ClassName="wave" src={login_wave} /> */}
                <div className="login-container">
                    <div className="img">
                        <img src={login_bg} />
                    </div>
                    <div className="login-content">
                        <form>
                            <img src={login_avatar} />
                            <h2 className="title">Welcome</h2>
                            <NavLink style={{ textDecoration: 'none', fontSize: '15px' }} to='/register'>Not Yet Registered? Please Register</NavLink>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>User email</h5>
                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="input" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Password</h5>
                                    <input  onChange={(e)=>setPassword(e.target.value)} type="password" className="input" />
                                </div>
                            </div>
                            <a className="anchore-tag" href="#">Forgot Password?</a>
                            <input onClick={(e)=>handleSubmit(e,email,password)} type="submit" className="submit-btn" value="Login" />
                            <button className='reset' type="reset">Reset</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        // <div className="mt-5 mb-5">
        //     <h1 className='mb-5'>Login form</h1>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <input
        //             className="input-field mb-3 w-25"
        //             name="email"
        //             placeholder="Email"
        //             type="email"
        //             autoComplete='off'
        //             {...register("email", { required: true })}
        //         />
        //         <br />
        //         <input
        //             className=" input-field mb-3 w-25"
        //             name="password"
        //             type="password"
        //             placeholder="Password"
        //             autoComplete='off'
        //             {...register("password", { required: true })}
        //         />
        //         <br />
        //         <input
        //             className="submit-btn btn btn-primary mb-3 fs-5"
        //             type="submit"
        //             value="Login"
        //         // onClick={handleSignIn}
        //         />
        //     </form>
        //     <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} to='/register'>Not Yet Registered? Please Register</NavLink>
        // </div>
    );
};

export default Login;