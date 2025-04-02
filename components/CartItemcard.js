import React from "react";

const CartItemcard = ({id,title,description,image,category,brand,discountPercentage,price,rating}) =>{

    return(
        <div>
            <div>
                <p>{title}</p>
                <p>{brand}</p>
                <p>Category:{category}</p>
                <p>{description}</p>
                <div>
                    <p>{price}</p>
                    <p>{discountPercentage}</p>
                    <p>{rating}</p>
                </div>
            </div>
            <div>
                <img src={image}/>
            </div>
        </div>
    )
}

export default CartItemcard;