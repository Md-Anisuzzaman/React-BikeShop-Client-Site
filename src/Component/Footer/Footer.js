import React from 'react';
// import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="text-white bg-dark position-footer d-flex">
                <div className="m-auto">
                    <h6 className="mt-2">Contact Us</h6>
                    <p className="mt-3">
                        Dhaka,Banani <br />
                        Email: BuyBike@gmail.com <br />
                        mobile: 00548925 , 006579211
                    </p>
                </div>
                <div>
                    <p className="mt-4">Our bikes would be your journey friend ,
                        <br /> we can help to get new model bike,
                        <br />We provide fancy collection,
                        <br />Happiness is get like most bike  </p>
                        <h2>BuyBike</h2>
                </div>
                <div className="m-auto mt-3">
                    <h5 className="mt-2">Find us at..</h5>
                    <br />
                    <h1><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h1>
                    <p className="mb-5">Copyright 2021</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
