import React from 'react';
import "./Papular.css";
import item_product from '../Assets/items'; // Ensure this import path is correct

const Papular = () => {
  return (
    <div className='papular'>
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className="papular-item">
            {item_product.map((item) => {
                // Ensure `item` has the required properties and is a valid component
                return (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>New Price: RS {item.new_price}</p>
                        <p>Old Price: RS {item.old_price}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Papular;
