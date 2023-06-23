import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";

function Checkout(){
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://pbs.twimg.com/profile_images/1587352380454338561/Uav_0HHn_400x400.jpg" alt="checkout_ad" />
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                <CheckoutProduct/>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout