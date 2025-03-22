import React from 'react'
import Styles from "../styles/Navbar.module.css"
const Navbar = () =>{
    return(
        <div className={Styles.navbar}>
            {/* left nav */}
            <div>
                <p>Logo</p>
            </div>

            {/* right logo */}

            <div className={Styles.navbar_right}>
                <p>My account</p>
                <p>Cart</p>
                <p>Contact</p>
                <p>Login</p>
            </div>
        </div>
    )
}

export default Navbar