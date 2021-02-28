import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const {name,img,price,seller,stock} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By {seller}</small></p>
                <p>Price {price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button onClick = {() =>props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
            </div>
        </div>
    );
};

export default Product;