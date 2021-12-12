import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;