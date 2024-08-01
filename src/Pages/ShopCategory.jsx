import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import Item from "../Components/Items/Item"
import dropDown_icon from "../Components/Assets/dropdown_icon.png"

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div>
      <div className='shop-category'>
        <div className="shop-banner-left">
          <h1>FLAT 50% OFF</h1>
          <p><span className='clr'>12</span> Hours <span className='clr'>20</span> Minutes</p>
          <button>Explore Now</button>
        </div>
        <div className="shop-banner-right">
          <img src={props.banner} alt="Shop Banner" />

        </div>
      </div>
      

    </div>
  );
}

export default ShopCategory;
