import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {GoThreeBars} from 'react-icons/go'
import { useState } from 'react';
const Header = () => {
  const [showMenu , setShowMeun] =useState(true);
  return (
    <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <span> amazon</span>
          </div>
          <div className={styles.right}>
            <div className={styles.toggle} onClick={()=>setShowMeun(!showMenu)}>
              <GoThreeBars />
            </div>
           
                <ul className={styles.menu} style={{display :showMenu ? 'flex':'none'}}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
    
            <input type="text" placeholder='Search'  className={styles.search}/>
            <AiOutlineShoppingCart className={styles.cart}/>
          </div>
    </div>
  )
}

export default Header
