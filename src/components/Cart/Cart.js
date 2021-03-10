import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total , prd) => (total + prd.price)  * prd.quantity,0);
    const tax = total/10;
    let shipping = 0;
    if(total < 10){
        shipping = 0;
    }
    else if(total < 99){
        shipping = 50
    }
    else if(total >100){
        shipping = 100;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length} </p>
            <p>Product Price : {Math.round(total)}</p>
            <p>Tax & VAT: {Math.round(tax)}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Total Price : {Math.round(total + tax + shipping)}</p>
            <Link to="/review">
                <button className="main-button">Review Button</button>
            </Link>
        </div>
    );
};

export default Cart;