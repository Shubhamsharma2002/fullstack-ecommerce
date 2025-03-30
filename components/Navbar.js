import React from 'react'
import Styles from "../styles/Navbar.module.css"
import Link from 'next/link'
const Navbar = () =>{
    return(
        <div className={Styles.navbar}>
            {/* left nav */}
            <div>
                <Link href="/">LOGO</Link>
            </div>

            {/* right logo */}

            <div className={Styles.navbar_right}>
                <Link className={Styles.navbar_right_link} href="/myaccount">My account</Link>
                <Link className={Styles.navbar_right_link} href="/cart">Cart</Link>
                <Link className={Styles.navbar_right_link} href="/contact">Contact</Link>
                <Link className={Styles.navbar_right_link} href="/login">Login</Link>
            </div>
        </div>
    )
}

export default Navbar