import React, {useState, useEffect} from "react";
import {FaStar} from "react-icons/fa"
import styles from './cartCard.module.css'
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CartCard(props){
    const [isClick, setClick] = useState( localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites'))[props.hlink]==props.hlink : false)
    
    const starvieWer = (arg) =>{
        if (arg<1) return
        if(arg>5) arg=5
        const starsArr =[]
        const white = 5-arg

        for(let i = 0; i<arg; i++){
            starsArr.push(<FaStar key={i} fill="#f33f3f"/>)
        }
        if(white){
            for(let i = 0; i<white; i++){
                starsArr.push(<FaStar key={i} fill="#e1e1e1"/>)
            }
        }
        return(starsArr)
    }

    const heartClick = ()=>{
        setClick(!isClick)
        const item = props.hlink
        !isClick? localStorage.setItem('favorites', JSON.stringify({...JSON.parse(localStorage.getItem('favorites')), [item]:item.toString() }) ) : localStorage.setItem('favorites', JSON.stringify({...JSON.parse(localStorage.getItem('favorites')), [item]: '' }))
    }

    return(
        <div className={styles.parent} key={props.hlink}>
            <div className={styles.imdParent}>
                <FiHeart className={isClick? styles.heartActive : styles.heartPassive}  onClick={heartClick}  />
                <img className={styles.imd} src={props.image} alt="" />
            </div>
                <div className={styles.desprst}>
                    <div className={styles.titpr}>
                        <div className={styles.tittle}>
                            <h4 className={styles.m0}>{props.tittle}</h4>
                        </div>
                        <div className={styles.price}>
                            <h6 className={styles.m0}>{props.price}</h6>
                        </div>
                    </div>
                    <div className={styles.countAndBtn}>
                       <div className={styles.count}>
                            Count: {props.count}
                       </div>
                       <Link to={`/Payment/?infoidIS${props.hlink}&countIS${props.count}`} className={styles.priceBtn}>
                            ${ props.count * Number(props.price.split('$')[1].trim())}
                       </Link>
                    </div>
                    <div className={styles.titpr}>
                        <div className="stars">{starvieWer(props.stars)}</div>
                        <div className={styles.rev}>Reviews ({props.reviews})</div>
                    </div>
                </div>
        </div>
    )
}