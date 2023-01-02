import React from 'react'
import styles from './Products.module.css'
import plane from '../../assets/plane.png';
import {ProductsData} from '../../data/products'
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Products = () => {
    const [MenuProduct , setMenuProduct] = useState(ProductsData);
    const [animationParent] = useAutoAnimate()
    const filter =(type) =>{
        setMenuProduct(ProductsData.filter((product) => product.type === type ));
    }

  return (
    <div className={styles.container}>
      <img src={plane} alt="" />
      <h1>Our Feature Products</h1>
    <div className={styles.products} >
         <ul className={styles.menu}>
            <li onClick={()=>setMenuProduct(ProductsData)}>All</li>
            <li onClick={()=>filter('skin care')}>Skin Care</li>
            <li onClick={()=>filter('conditioner')}>Conditioner</li>
            <li onClick={()=>filter('foundation')}>Foundation</li>
         </ul>
         <div className={styles.list} ref={animationParent}>
       {
        MenuProduct.map((product) =>(
        <div className={styles.product}>
          <div className="left-s">
               <div className="names">
                <span>{product.name}</span>
                <span>{product.detail}</span>
               </div>
               <span className='price'>{product.price} $</span>
               <button>Shope Now</button>
            </div>
            <img src={product.img} alt="Product" className='img-p' />
        </div>
        )
       
        )
       }
         </div>
    </div>

    </div>
  )
}

export default Products
