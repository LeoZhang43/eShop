import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";

function Checkout(){
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://pattern.com/wp-content/uploads/2020/08/amazon-prime.jpg" alt="" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                    <Subtotal/>
                </div>
            </div>
    )
}

export default Checkout