import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,50);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(product => <Product product ={product} handleAddProduct={handleAddProduct}></Product>)
                    }
            </div>
            <div className="cart-container">
                <h3>This is cart  </h3>
                <p>Order Summary {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;