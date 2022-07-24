import React from 'react';
import '../styles/contact-us.scss';

const ContactUs = () =>{

    return(
        <div className="contact-us-wrapper">
            <div className="map"></div>
            <div className="contact-form-container">
                <h2>Get in touch</h2>
                <form className="contact-form" action="#">
                    <input type="text" name="name" id="" placeholder="Name"/>
                    <input type="text" name="email" id="" placeholder="E-mail"/>
                    <input type="text" name="phone" id="" placeholder="Phone"/>
                    <input type="text" name="message" id="" placeholder="Message"/>
                    <input className="submit" type="submit" value="Send Mesage" />
                </form>
            </div>
        </div>
        
    )
}

export default ContactUs;