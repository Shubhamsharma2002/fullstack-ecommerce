import React, { useState } from "react";
import Styles from "../styles/Cart.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarIcon from '@mui/icons-material/Star';
const CartItemcard = ({id,title,description,image,category,brand,discountPercentage,price,rating}) =>{
       const[qty,setQty] = useState(1);
    return(
        <div className={Styles.cart_item_card}>
            <div className={Styles.cart_item_card_content}>
                <p className={Styles.cart_item_card_title}>{title}</p>
                <p className={Styles.cart_item_card_brand}>{brand}</p>
                <p className={Styles.cart_item_card_category}>Category:{category}</p>
                <p>{description}</p>
                <p className={Styles.cart_item_card_price}>₹ {(price*90).toFixed(2)}</p>
                <p className={Styles.cart_item_card_discount}>Discount : {discountPercentage} %</p>
                <div className={Styles.cart_item_card_footer}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '4px', color:'green'}}> <StarIcon/> {rating}</p>
                <div className={Styles.cart_item_card_footer_left}>
                     <AddIcon/>
                      <p>{qty}</p>
                     <RemoveIcon/>
                </div>
                </div>
            </div>
            <div className={Styles.cart_item_card_image}>
                <img src={image}/>
            </div>
        </div>
    )
}

export default CartItemcard;