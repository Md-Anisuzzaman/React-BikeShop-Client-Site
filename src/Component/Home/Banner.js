import React from 'react';
import './Banner.css'
import bg from '../../Images/banner-bike-removebg-preview.png';


const Banner = () => {
    return (
        <div className="banner-body">
            {/* <img className="w-100" src="https://www.heromotocorp.com/en-bd/uploads/bike/bike_banner/20200930064105-bike-banner-Ignitor-482.jpg" alt="" /> */}
            {/* <img  className="w-100" src="https://www.heromotocorp.com/en-bd/uploads/bike/bike_banner/20210106065024-bike-banner-Thriller-160R-420.jpg" alt=""/> */}
            {/* <img  className="w-100" src="https://www.padgettsmotorcycles.com/wp-content/uploads/2020/12/suzuki-pageheader-fullwidth-4-1.jpg" alt=""/> */}
            {/* <img className="w-100" src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/company/amrb001-1.jpg?h=1232&width=1200&format=webp&quality=60" alt=""/> */}
            {/* <img className='w-100' src={banner} alt=""/> */}
            {/* <div className='text-div'>
                <h2 className='h2-text'><span className='span-color'>Buy</span> your stylish bike
                <br/>
                </h2>
            </div> */}
            <div className="text-content">
                {/* <h1 className='h2-text text-success'><span className='span-color'>Enjoy</span> your stylish bike
                    <br />
                </h1> */}
                <h3 className='h3-text'>A long ride can clear your mind, restore your faith and use up a lot.</h3>
                <p>Life without a motorcycle is just life.
                    live to Ride, ride to live. <br /> No matter how bad your day is your bike will always make you feel better.</p>
            </div>

            <div className="image-body">
                <img className='w-75' src={bg} alt="" />
                {/* <img className='w-75' src="https://static.langimg.com/thumb/msid-62693385,width-1200,height-900,resizemode-75/navbharat-times.jpg" alt="" /> */}
            </div>
        </div>
    );
};

export default Banner;