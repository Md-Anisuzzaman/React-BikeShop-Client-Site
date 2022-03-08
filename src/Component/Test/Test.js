// import React, { useEffect } from 'react';
// // import './Test.css'
// import register_avatar from '../../Images/avatarR.svg';
// import register_wave from '../../Images/waveR.png';
// // import login_bg from '../../Images/login-bg.svg'
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
//             <img class="wave" src={register_wave} />
//             <div class="container">
//                 <div class="img"></div>
//                 <div class="login-content">
//                     <form action="index.html">
//                         <img src={register_avatar} />
//                         <h2 class="title">Howdy!!</h2>
//                         <div class="input-div one">
//                             <div class="i">
//                                 <i class="fas fa-user"></i>
//                             </div>
//                             <div class="div">
//                                 <h5>Username</h5>
//                                 <input type="text" class="input" />
//                             </div>
//                         </div>
//                         <div class="input-div pass">
//                             <div class="i">
//                                 <i class="fas fa-lock"></i>
//                             </div>
//                             <div class="div">
//                                 <h5>Password</h5>
//                                 <input type="password" class="input" />
//                             </div>
//                         </div>
//                         <a href="#">Forgot Password?</a>
//                         <input type="submit" class="btn" value="Login" />
//                     </form>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Test;