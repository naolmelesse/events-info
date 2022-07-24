import React from "react";
import '../styles/footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTelegram, faLinkedin, faWhatsapp, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {

    return(
        <div className="footer-container">
            <div className="footer">
                <div className="left">
                    <div className="address">
                        <h2> Address</h2>
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7395591562336!2d38.789057714573424!3d8.99609559354373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858879d2b463%3A0x82bec88289e545a8!2zRmFuYSBQbGF6YSB8IEJvbGUgTWVkaGFuaWFsZW0gfCDhjYvhipMg4Y2V4YiL4YubIHwg4Ymm4YiMIOGImOGLteGIgOGKkuGLq-GIiOGInQ!5e0!3m2!1sen!2sin!4v1657247776008!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p><FontAwesomeIcon className="social-icon" icon={faLocationDot}/> Bole Medanialem, Fana Plaza 3rd floor, Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="social">
                        <h2>Connect with us</h2>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faFacebook} size="2x"/></a>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faInstagram} size="2x"/></a>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faTelegram} size="2x"/></a>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faTwitter} size="2x"/></a>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faLinkedin} size="2x"/></a>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faWhatsapp} size="2x"/></a>
                        <a href=""><FontAwesomeIcon className="social-icon" icon={faYoutube} size="2x"/></a>
                    </div>
                </div>
                <div className="right">
                    <form className="contact-form" action="">
                        <h2>Contact us</h2>
                        <input className="text-box" type="text" name="name" id="" placeholder="Name"/>
                        <input className="text-box" type="email" name="email" id="" placeholder="E-mail" />
                        <textarea className="text-box" name="message" id="" cols="20" rows="5" placeholder="Message" ></textarea>
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                    
                </div>
            </div>
            <div class="copyright">
                <small>&copy; Copyright 2022</small>
            </div>
        </div>
    )
}

export default Footer;
