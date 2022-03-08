import React, { useEffect } from 'react';
import './Test.css'
import register_avatar from '../../Images/avatarR.svg';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Test = () => {

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
    const handleSubmit = (data) => {
        loginUser(data.email, data.password);
        console.log(data, location, history);
        history.replace(redirect_url);
    };
    return (
        <div>
            <div className="register-container">
                <div className="register-content">
                    <form>
                        <img src={register_avatar} />
                        <h4 className="title">Register</h4>
                        <NavLink style={{ textDecoration: 'none', fontSize: '15px',textAlign:'center',marginBottom:'10px',color:"blue"}} to='/login'>Already Registered? Please Login</NavLink>
                        <div className="input-div one">
                            <div className="i">
                            <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Username</h5> */}
                                <input type="text" placeholder='User name' className="input" />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Username</h5> */}
                                <input type="email" placeholder='User email' className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Password</h5> */}
                                <input type="password" placeholder='Password' className="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" className="register-btn" value="Register" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Test;