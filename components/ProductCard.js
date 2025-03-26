import React from "react";
import Styles from "../styles/ProductCard.module.css"
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const ProductCard = ({id,brand,price,image,title, rating}) => {
      return(
        <div className={Styles.product_card}>
            <img src={image} />
            <div className={Styles.product_card_details}>
            <p className={Styles.product_card_brand}>Brand:{brand}</p>
            <p className={Styles.product_card_title}>{title}</p>
            <div className={Styles.product_card_footer}>
            <p className={Styles.product_card_price}><CurrencyRupeeIcon/>{price}</p>
            <p className={Styles.product_card_rating}><StarIcon/>{rating}</p>
            </div>
            </div>
            
        </div>
      )
}

export default ProductCard