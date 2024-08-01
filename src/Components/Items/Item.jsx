import React from 'react';
import "./Item.css";

const Items = (props) => {
  return (
    <div className='items'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                New Price: RS {props.new_price}
            </div>
            <div className="item-price-old">
                Old Price: RS {props.old_price}
            </div>
        </div>
    </div>
  );
}

export default Items;
