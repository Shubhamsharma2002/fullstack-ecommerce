import React from "react";
import Styles from "../styles/ProductCard.module.css"
const ProductCard = ({id,brand,price,image,title}) => {
      return(
        <div className={Styles.product_card}>
            <img src={image} />
            <div className={Styles.product_card_details}>
            <p className={Styles.product_card_brand}>Brand:{brand}</p>
            <p className={Styles.product_card_title}>{title}</p>
            <p className={Styles.product_card_price}>{price}</p>
            </div>
            
        </div>
      )
}

export default ProductCard