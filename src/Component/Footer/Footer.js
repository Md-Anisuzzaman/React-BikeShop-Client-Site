import React from 'react';


const Footer = () => {
    return (
        <div className=''>
            <footer className="text-white bg-dark position-footer d-flex justify-content-lg-center justify-content-sm-center text-start row pt-5 px-5">
                <div className=" col-md-4">
                    <h6 className="mt-2">Contact Us</h6>
                    <p className="mt-3">
                        Dhaka,Banani <br />
                        Email: BuyBike@gmail.com <br />
                        mobile: 00548925 , 006579211
                    </p>
                    <h1><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h1>
                </div>
                <div className="col-md-4">
                    <p className="mt-3">Our bikes would be your journey friend,
                        <br /> we can help to get new model bike,
                        <br />We provide fancy collection,
                        <br />Happiness is get like most bike  </p>
                    <h4>BuyBike</h4>
                </div>
                <div className='col-md-4'>
                    <div classname="input-group">
                        <input type="text" class="form-control" placeholder='Search' />
                        <button className='btn btn-info mt-3'>Search</button>
                    </div>
                </div>
                <hr className='mt-3'/>
                <p className='text-center'>&copy;Copyright 2022</p>
            </footer>

        </div>
    );
};

export default Footer;
