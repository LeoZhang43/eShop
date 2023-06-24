import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating}){
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
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
                    <div className="removeFromBasket">
                        <button onClick={removeFromBasket}>Remove from Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct