import React from 'react'
import "./Hero.css";
import hero_icon from "../Assets/hero.png";
import arrow_ico from "../Assets/arrow_icon.png";

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h4>NEW ARRIVALS ONLY</h4>
            <div className="hand-icon">
                <h1>new</h1>
                <img src alt="" />
            </div>
            <h1>Featured Categories</h1>
            <h1>for Everyone</h1>
            <div className="hero-latest-btn">
                <p>Latest Collection</p>
                <img src={arrow_ico} alt="" />
            </div>
        </div>


        <div className="hero-right">
            <img src={hero_icon} className='image' alt=""/>

        </div>
    </div>
  )
}

export default Hero;
