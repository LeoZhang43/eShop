import React from "react";
import "./Product.css";

function Product({id, title, image, price, rating}){
    return (
        <div>
            <div class="item">
                <div class="item-image">
                    <img src={image}/>
                </div>
                <div class="item-details">
                    <h3 class="item-description">{title}</h3>
                    <p className="star">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </p>
                    <p class="item-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <button className="addToCart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product