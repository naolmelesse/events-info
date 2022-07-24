import React from 'react';
import '../styles/banner.scss';

const Banner = () =>{

    return(
        <div className="banner">
            <div className="banner-container">
                <div className="banner-text">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates cupiditate, commodi labore dignissimos incidunt corporis corrupti debitis consequuntur beatae vero, error eum exercitationem quam.</p>
                    <button >Learn more</button>
                </div>
                <div className="banner-image-container">
                    {/* <img className="banner-image" src={bannerImage} alt="banner" /> */}
                </div>
            </div>
        </div>
        
    )
}

export default Banner;