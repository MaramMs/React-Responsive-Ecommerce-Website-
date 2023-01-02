import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
  return (
    <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <span> amazon</span>
          </div>
          <div className={styles.right}>
            <div className={styles.menu}>
                <ul className={styles.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <input type="text" placeholder='Search'  className={styles.search}/>
            <AiOutlineShoppingCart className={styles.cart}/>
          </div>
    </div>
  )
}

export default Header
