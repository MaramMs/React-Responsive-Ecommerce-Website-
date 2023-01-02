import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {LocationMarkerIcon , LoginIcon , LinkIcon,UsersIcon, PhoneIcon, InboxIcon} from '@heroicons/react/outline'
const Footer = () => {
  return (
    <div className={styles.cFooterWrapper}>
      <hr />
      <div className={styles.cfooter}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <span>amazon</span>
        </div>

        <div className={styles.block}>
          <div className={styles.details}>
            <span>Contact Us</span>
            <div className={styles.pngLine}>
              <LocationMarkerIcon />
              <span>111 north avenue Orlando, FL 32801</span>
            </div>
            <div className={styles.pngLine}>
              <PhoneIcon />
              <span>352-306-4415</span>
            </div>
            <div className={styles.pngLine}>
              <InboxIcon />
              <span>support@amazon.com</span>
            </div>
          
          </div>
        </div>


        <div className={styles.block}>
          <div className={styles.details}>
            <span>Account</span>
            <div className={styles.pngLine}>
              <LoginIcon />
              <span>Sign in</span>
            </div>
          </div>
        </div>
        
        <div className={styles.block}>
          <div className={styles.details}>
            <span>Company</span>
            <div className={styles.pngLine}>
              <UsersIcon/>
              <span>About us</span>
            </div>
          </div>
        </div>
        
        <div className={styles.block}>
          <div className={styles.details}>
            <span>Resources</span>
            <div className={styles.pngLine}>
              <LinkIcon />
              <span>Safety Privacy & Terms</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <span>Copyright ©2022 by Maram, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
