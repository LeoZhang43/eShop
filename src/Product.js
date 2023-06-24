import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}){
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

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
                    <div className="addToCart">
                        <button onClick={addToBasket}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product