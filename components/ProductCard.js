import React from "react";

const ProductCard = ({id,brand,price,image,title}) => {
      return(
        <div>
            <img src={image} width = "100px"/>
            <p>Brand:{brand}</p>
            <p>{title}</p>
            <p>{price}</p>
        </div>
      )
}

export default ProductCard