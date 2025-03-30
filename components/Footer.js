import React from "react";
import Styles from "../styles/Footer.module.css"
const Footer = () =>{
    return(
        <div className={Styles.footer}>
            <div>
                <p>Logo</p>
            </div>
            <div className={Styles.footer_links}>
              <p>My acount</p>
              <p>Cart</p>
              <p>Contact</p>
            </div>
        </div>
    )
}
export default Footer;