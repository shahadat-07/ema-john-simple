import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;

    return (
        <div>
            <h3 style={{borderBottom : '1px solid lightgray',marginBottom:'5px', paddingBottom:'5px'}} className="product-name">{name}</h3>
            <p>Quantity : {quantity}</p>
            <p>$ {price}</p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove Item</button>
        </div>
    );
};

export default ReviewItem;