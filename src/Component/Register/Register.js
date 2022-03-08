import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import './Register.css'
import register_avatar from '../../Images/avatarR.svg';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const { user, registerUser } = useAuth();


    let history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from?.pathname || '/home';
    console.log(redirect_url);


    useEffect(() => {
        if (user.email) {
            history.replace(redirect_url);
        }
    }, [user])

    // const { register, handleSubmit } = useForm();

    const handleSubmit = (e,name,email,password) => {
        e.preventDefault();
        registerUser(name,email,password);
        console.log(name,email,password);
        history.replace(redirect_url);
        
    // const onSubmit = (data) => {
    //     registerUser(data.email, data.password, data.name);
    //     console.log(data, location, history);
    //     history.replace(redirect_url);
    //     console.log(data);
    };
    return (

        <div>
            <div className="register-container">
                <div className="register-content">
                    <form>
                        <img src={register_avatar} />
                        <h4 className="title">Register</h4>
                        <NavLink style={{ textDecoration: 'none', fontSize: '15px', textAlign: 'center', marginBottom: '10px', color: "blue" }} to='/login'>Already Registered? Please Login</NavLink>
                        <div className="input-div one">
                            <div className="reg-i-icon">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Username</h5> */}
                                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='User name' className="input" />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="reg-i-icon">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Username</h5> */}
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='User email' className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="reg-i-icon">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Password</h5> */}
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className="input" />
                            </div>
                        </div>
                        <Link to="/fr">Forgot Password?</Link>
                        <input onClick={(e) => handleSubmit(e,name,email,password)} type="submit" className="register-btn" value="Register" />
                    </form>
                </div>
            </div>

        </div>
        // <div className="mt-5 mb-5">
        //     <h1 className='mb-5'>Registration Form</h1>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <input
        //             className="mb-3 w-25"
        //             {...register("name", { required: true })}
        //             name="name"
        //             placeholder="Name"
        //             type="name"
        //             autoComplete='off'

        //         />
        //         <br />
        //         <input
        //             className="mb-3 w-25"
        //             {...register("email", { required: true })}
        //             name="email"
        //             placeholder="Email"
        //             type="email"
        //             autoComplete='off'

        //         />
        //         <br />
        //         <input
        //             className="mb-3 w-25"
        //             {...register("password", { required: true })}
        //             name="password"
        //             type="password"
        //             placeholder="Password"
        //             autoComplete='off'

        //         />
        //         <br />
        //         <input
        //             className="submit-btn btn btn-info fs-5 mb-3"
        //             type="submit"
        //             value="Register"
        //         />
        //     </form>
        //     <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} to='/login'>Already Registered? Please Login</NavLink>
        // </div>
    );
};

export default Register;