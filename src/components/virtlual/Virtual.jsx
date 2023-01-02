import React from "react";
import ReactCompareImage from "react-compare-image";
import Shade from '../../assets/shade.png';
import before from '../../assets/before.png'
import after from '../../assets/after.png'
import styles from './Virtual.module.css'

const Virtual = () => {
  return (
    <div className={styles.virtual}>
      <div className={styles.left}>
        <span>virtual try-on</span>
        <span>never buy the wrong shade again!</span>
        <span>tryNow</span>
        <img src={Shade} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
        <ReactCompareImage leftImage={before} rightImage={after}/>

        </div>
      </div>
    </div>
  );
};

export default Virtual;
