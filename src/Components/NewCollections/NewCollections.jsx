import React from 'react';
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item) => {
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

