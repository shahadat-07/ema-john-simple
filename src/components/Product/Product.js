import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, img, price, seller, stock, key } = props.product;
    console.log(props)
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>By {seller}</small></p>
                <p>Price {price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;