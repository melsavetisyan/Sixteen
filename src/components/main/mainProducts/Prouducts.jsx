import React from "react";
import { Link } from "react-router-dom";
import ProductLoader from "./productLoader/ProductLoader";
import styles from './products.module.css'

function Products(){    
    return(
        <div className={styles.parent}>
            <div className={styles.container}>
                <div className={styles.titAndView}>
                    <div className={styles.tittle}>Lastet Products</div>
                    <Link to={'About'} className={styles.view}>{"VIEW ALL PRODUCTS>"}</Link>   
                </div>
            </div>
            <div className={styles.container}>
                <ProductLoader/>
            </div>
        </div>
    
    )
}

export default Products