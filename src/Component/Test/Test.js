// import React, { useEffect } from 'react';
// import './Test.css'
// import login_avatar from '../../Images/avatar1.svg';
// // import login_wave from '../../Images/wave1.png';
// import login_bg from '../../Images/login-bg.svg'
// // import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';
// import { NavLink } from 'react-router-dom';

// const Test = () => {

//     const { loginUser, user } = useAuth();


//     let history = useHistory();
//     const location = useLocation();
//     const redirect_url = location?.state?.from?.pathname || '/home';
//     console.log(redirect_url);

//     useEffect(() => {
//         if (user.email) {
//             history.replace(redirect_url);
//         }
//     }, [user])


//     // const { register, handleSubmit, reset } = useForm();
//     const handleSubmit = (data) => {
//         loginUser(data.email, data.password);
//         console.log(data, location, history);
//         history.replace(redirect_url);
//     };
//     return (
//         <div>
//             <div>
//                 {/* <img ClassName="wave" src={login_wave} /> */}
//                 <div className="login-container">
//                     <div className="img">
//                         <img src={login_bg} />
//                     </div>
//                     <div className="login-content">
//                         <form onSubmit={handleSubmit}>
//                             <img src={login_avatar} />
//                             <h2 className="title">Welcome</h2>
//                             <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} to='/register'>Not Yet Registered? Please Register</NavLink>
//                             <div className="input-div one">
//                                 <div className="i">
//                                     <i className="fas fa-user"></i>
//                                 </div>
//                                 <div className="div">
//                                     <h5>Username</h5>
//                                     <input type="text" className="input" />
//                                 </div>
//                             </div>
//                             <div className="input-div pass">
//                                 <div className="i">
//                                     <i className="fas fa-lock"></i>
//                                 </div>
//                                 <div className="div">
//                                     <h5>Password</h5>
//                                     <input type="password" className="input" />
//                                 </div>
//                             </div>
//                             <a className="anchore-tag" href="#">Forgot Password?</a>
//                             <input type="submit" className="submit-btn" value="Login" />
//                             <button className='reset' type="reset">Reset</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Test;