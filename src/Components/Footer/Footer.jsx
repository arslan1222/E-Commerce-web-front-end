import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/footer_logo.jpg";
import instagram from "../Assets/instagram_icon.jpg"
import whatsapp from "../Assets/whatsapp_icon.jpg"
import facebook from "../Assets/facebook_icon.png"


export const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-icons">
                <div className="icon-container">
                    <img src={instagram} alt="instagram" className="instagram" />
                    <img src={whatsapp} alt="whatsapp" className="whatsapp" />
                    <img src={facebook} alt="facebook" className="facebook" />
                </div>
            </div>
            <div className="footer-copyright">
                    <hr />
                    <p> &copy; Copyright @ 2024 - All Right Reserved</p>
                </div>
        </div>
    )
}

export default Footer;