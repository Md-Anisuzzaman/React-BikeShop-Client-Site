import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-body">
            <div className="text-content">
                <h3 className='h3-text'><span>Restore</span> your faith, ready to ride?</h3>
                <p>live to Ride, ride to live. No matter how bad your day is your bike will always make you feel better.
                    Ride wants you to come and go.
                </p>
                <button className='btn btn-warning'>Get started</button>
            </div>
        </div>
    );
};

export default Banner;