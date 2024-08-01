import React from 'react';
import "./Offer.css";
import offer_img from '../Assets/offer_img.png';

export const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='offer-left-btn'>Check Here</button>
        </div>
        <div className="offer-right">
            <img src={offer_img} alt="" />
        </div>
    </div>
  )
}

