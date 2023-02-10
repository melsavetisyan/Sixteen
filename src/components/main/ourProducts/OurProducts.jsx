import React, { useState } from "react";
import HeadingPh from "../headingPhoto/HeadingPh";
import ourStyle from  './ourStyle.module.css';
import ProductsLoader from '../mainProducts/productLoader/ProductLoader'
import productsHeading from '../image/products-heading.jpg'
import menu from './menu.json'

export default function OurProducts(){
    const [clickedItem, setClickedItem] = useState(1)

    return(
        <div className={ourStyle.parent}>
            <HeadingPh image={productsHeading} tittle={'NEW ARRIVALS'} description={'SIXTEEN PRODUCTS'} />
            <div className={ourStyle.container}>
                <div className={ourStyle.filterList}>
                    <ul className={ourStyle.ul}>
                        {menu.map(item => <li className={clickedItem == item.id? `${ourStyle.liActive}`: ourStyle.li} onClick={()=>{setClickedItem(item.id)}} key={item.id}>{item.name}</li>)}
                    </ul>
                </div>
                {
                clickedItem == 1?<ProductsLoader />
                :clickedItem == 2? <ProductsLoader filter={0}/>||<h1>EMPTY LIST</h1>
                :clickedItem == 3? <ProductsLoader filter={1}/>||<h1>EMPTY LIST</h1>
                :clickedItem == 4? <ProductsLoader filter={2}/>||<h1>EMPTY LIST</h1>
                :null}
            </div>
        </div>
    )
}   