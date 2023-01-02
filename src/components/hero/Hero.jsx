import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero.png";
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.h_sides}>
        <span className={styles.text1} >skin protection cream</span>
        <div className={styles.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* hero middle */}
      <div className={styles.wrapper}>
        <div className={styles.blueCircle}></div>
        <img src={heroImage} alt="" width={600}/>
        <div className={styles.cart2}>
          <RiShoppingBagFill />
          <div className={styles.signup}>
            <span>Best Signup Offers</span>
            <div>
                <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className={styles.h_sides}>
        <div className={styles.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={styles.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
