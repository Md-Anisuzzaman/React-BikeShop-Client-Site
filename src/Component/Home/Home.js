import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Product from '../Product/Product';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;