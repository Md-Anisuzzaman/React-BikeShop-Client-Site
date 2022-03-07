import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1 className="mt-2 mb-5 tex-center">About Us</h1>
            <div className="row">
                <div className="col-md-6 text-start">
                    <p className="mt-5">Bicycle is one of the best vehicles in the replace for its various aspects.
                        The bicycle is made of two wheels, which consisting two tiers and tubes an iron frame.
                        It has a paddle, handle, and brake to increase and decrease its speed.
                        It has a seat cover and seat on which a rider sits and drives it.
                        Sitting on the seat one has to press on the paddle, which is confined by a chain. 
                        {/* Its driving system is very easy and maximum person of our country can drive it easier than other vehicles.
                        It has a bell to aware the other passersby on the road.
                        It costs a little and does not pollute the air. On a busy road in either town or rural area,
                        we can drive it easily for having its brake.
                        This is very useful for the service holders in the undeveloped area, where other vehicles will not be driven. We can buy it easily and its expense is too trifling. Sometimes a bicycle provides more than one to move on. It has a career,
                        which contains our luggage.
                        Village doctors and mail carrier use it for their service. Therefore, the bicycle is the very beneficial and useful vehicle, which makes no harm to our environment. */}
                    </p>
                </div>
                <div className="col-md-6">
                    <img className="pb-5 w-100" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/harley-davidson-wdc9ZAiwBB4-un_0.jpeg?DsrBQBWzC_rQTNCFW1F4wTzNTPuprK92&size=770:433" alt="" />

                </div>
            </div>


        </div>
    );
};

export default About;