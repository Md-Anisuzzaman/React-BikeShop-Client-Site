import React from 'react';
// import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="text-white bg-dark position-footer d-flex justify-content-lg-center justify-content-sm-center text-start row p-3">
                <div className="m-auto col-md-3">
                    <h6 className="mt-2">Contact Us</h6>
                    <p className="mt-3">
                        Dhaka,Banani <br />
                        Email: BuyBike@gmail.com <br />
                        mobile: 00548925 , 006579211
                    </p>
                </div>
                <div className="col-md-3">
                    <p className="mt-3">Our bikes would be your journey friend,
                        <br /> we can help to get new model bike,
                        <br />We provide fancy collection,
                        <br />Happiness is get like most bike  </p>
                    <h4>BuyBike</h4>
                </div>
                <div className="mt-3 col-md-3">
                    <h5>Find us at..</h5>
                    <br />
                    <h1><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h1>
                    <p>Copyright 2021</p>
                </div>
               <div className='col-md-3 mt-5'>
               <div classname="input-group">
                    <input type="text" class="form-control" placeholder='Search' />
                    <button className='btn btn-info mt-3'>Search</button>
                </div>
               </div>
            </footer>

        </div>
    );
};

export default Footer;
