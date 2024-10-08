import React from 'react'
import "./Footer.css"
import Aboutimg from "../../Assets/logo.png"
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import footlogo from "../../Assets/krugervac footerlogo.jpg"


const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <>
            <div className="Footer">
                <div className="Footer-main">
                    <div className="footer-detail-box">
                        <div className="footer-left">
                            <Link onClick={scrollTop} to="/">
                                <img className="image2" src={Aboutimg} alt="" />
                            </Link>
                            <p>Kruger Vac is one of the leading suppliers of commercial and industrial vacuum cleaners and other cleaning equipment.</p>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Quick Links</h2>
                            <ul>
                                <li>
                                    <Link onClick={scrollTop} to="/">Home</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/about">About</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/contact-us">Contact Us</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/contact-us">Send Enquery</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Our Products</h2>
                            <ul>
                                <li>
                                    <Link onClick={scrollTop} to="/walk-behind-automatic-scrubber-driers">Walk Behind Automatic Scrubber Driers</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/ride-on-automatic-scrubber-driers">Ride On Automatic Scrubber Driers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Contact</h2>
                            <ul>
                                <li>
                                    <Link>B-78,  B Block, Sector-88, Noida, Uttar Pradesh 201305 India</Link>
                                </li>
                                <li>
                                    <Link to='tel: +919266021137'>9266021137</Link>
                                </li>
                                <li>
                                    <Link to='mailto: info@krugervac.com'> info@krugervac.com</Link>
                                </li>
                            </ul>
                            <div className="footer-social-media">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                    <div className="footerlogo-down">
                        <img src={footlogo} alt="" />
                    </div>
                </div>
                <div className="footer-down">

                    <div className="footer-copyright-menu">
                        <ul>
                            <li>
                                <Link onClick={scrollTop} to="/">Disclaimer</Link>
                            </li>
                            <li>
                                <Link onClick={scrollTop} to="/">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link onClick={scrollTop} to="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2024 Kruger Vac India Pvt. Ltd. | All rights reserved.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
