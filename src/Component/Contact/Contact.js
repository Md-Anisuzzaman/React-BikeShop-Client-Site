import React, { useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [emailSuccess, setEmailSuccess] = useState();


    const handleContactForm = (e) => {
        emailjs.sendForm('service_s6y67zn', 'template_1d4buxu', e.target, 'user_p1GkQ1dbcf6tTyrgGbRtI')
            .then((result) => {
                console.log(result.text);
                setEmailSuccess(true);
            }, (error) => {
                console.log(error.text);
                setEmailSuccess(false);
            });

        e.target.reset();
        e.preventDefault();
    }
    return (
        <div>

            <div className="hero d-flex pt-5 pb-5">
                <form onSubmit={handleContactForm} >
                    <h1 className=' mb-5 text-light'>Get in Touch</h1>
                    {
                emailSuccess && <p className="alert alert-info text-center fs-5" role="alert">
                    Your message sent successfully
                </p>
                // :
                //     <div className="alert alert-danger text-center fs-2" role="alert">
                //         Your message not sent successfully
                //     </div>
            }
                    <div class="cl-row">
                        <div ClassName="input-grou mb-5">
                            <input className='in-put' type="text" placeholder='your Name' name='name' />
                            {/* <label className='cl-label' htmlFor="name"><i class="fa-solid fa-user"></i> Your Name</label> */}
                        </div>
                        <div ClassName="input-grou">
                            <input className='in-put' type="number" placeholder='Phone No.' name='phone' />
                            {/* <label className='cl-label' htmlFor="number"><i class="fas fa-phone-square-alt"></i> Phone No.</label> */}
                        </div>
                    </div>
                    <div ClassName="input-grou">
                        <input className='in-put' type="email" placeholder='Your Email' name='email' />
                        {/* <label className='cl-label'  htmlFor="email"><i class="fa-regular fa-envelope"></i> Email</label> */}
                    </div>
                    <div ClassName="input-grou">
                        <textarea className='in-put' placeholder='your Message' id="message" rows="8" name='message'></textarea>
                        {/* <label className='cl-label' htmlFor="message"><i class="fa-regular fa-comments"></i> Your Message</label> */}
                    </div>
                    <button className="cl-button" type="submit">Send <i class="fa-regular fa-paper-plane"></i></button>
                </form>
            </div>

        </div>
    );
};

export default Contact;