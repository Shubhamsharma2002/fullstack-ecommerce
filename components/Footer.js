import React from "react";
import Styles from "../styles/Footer.module.css"
import Link from "next/link";
const Footer = () =>{
    return(
        <div className={Styles.footer}>
            <div>
                <Link href="/homepage">Logo</Link>
                
            </div>
            <div className={Styles.footer_links}>
              <Link className={Styles.footer_links_link} href="/myaccount">My acount</Link>
              <Link className={Styles.footer_links_link} href="/cart">Cart</Link>
              <Link className={Styles.footer_links_link} href="/contact">Contact</Link>
            </div>
        </div>
    )
}
export default Footer;