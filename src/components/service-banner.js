import React from 'react';
import '../styles/service-banner.scss';

const ServiceBanner = () =>{

    return(
        <div className="service-banner-wrapper">
            <div className="service-banner">
                <h1>Our services</h1>
                <p>Look at the list of our services and choose the one convenient for you</p>
                <div className="service-buttons">
                    <button>Get premiuim</button>
                    <button className="free-btn">Free</button>
                </div>

            </div>
            <button></button>
        </div>
        
    )
}

export default ServiceBanner;