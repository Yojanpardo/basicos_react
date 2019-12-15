import React from 'react';

const Product = ({name, price}) => (
    <div className='product'>
        <h3>{name}</h3>
        <p>price: ${price}</p>
    </div>    
);

export default Product;