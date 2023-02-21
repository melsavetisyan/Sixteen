import React, {useState} from "react";
import axios from "axios";
import styles from "./style.module.css"
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function Info(){
    const [cart, setCart] = useState([]);

    const info = window.location.href.split('#')[1]
    const [data, setData] = useState({price:'$0'})
    const [value, setValue] = useState(1)
    const [isClick, setClick] = useState( localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites', info))[info]==info : false)
    const price = +data.price.split('$')[1]
   
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://retoolapi.dev/wF9KT5/data/${JSON.parse(info)}`,
            responseType: 'appliction/json'
        }).then(elem=>setData(JSON.parse(elem.data)))
    }, [])

    const starvieWer = (arg) =>{
        if (arg<1) return
        if(arg>5) arg=5
        const starsArr =[]
        const white = 5-arg

        for(let i = 0; i<arg; i++){
            starsArr.push(<FaStar key={Math.random()*Date.now()} fill="#f33f3f"/>)
        }
        if(white){
            for(let i = 0; i<white; i++){
                starsArr.push(<FaStar key={Math.random()*Date.now()} fill="#e1e1e1"/>)
            }
        }
        return(starsArr)
    }
    const inputChange = (e)=> {
        setValue(e.target.value>1? e.target.value<15? e.target.value :15 : 1)
        console.log(value);
    }
    const heartClick = ()=>{
        setClick(!isClick)
        const item = info
        !isClick? localStorage.setItem('favorites', JSON.stringify({...JSON.parse(localStorage.getItem('favorites')), [item]:info.toString() }) ) : localStorage.setItem('favorites', JSON.stringify({...JSON.parse(localStorage.getItem('favorites')), [item]: '' }))
    }
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('cart'))){
            setCart([...JSON.parse(localStorage.getItem('cart'))])
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    
    const  addToCart = (item) =>{
        const filtered = cart.filter(data=>data.id!=item.id)
        const total = cart.filter(data=>data.id==item.id)
        console.log()
        setCart([...filtered, item])
    };
    
    return(
        <div className={styles.parent}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgParent}>
                        <FiHeart className={isClick? styles.heartActive : styles.heartPassive}  onClick={heartClick} />
                        <img className={styles.img} src={data.image} alt="" />
                    </div>
                    <div className={styles.tittleBtn}>
                        <div className={styles.tittleStars}>
                            <h2 className={styles.title}>{data.tittle}</h2>
                            <div className={styles.stars}> 
                                {starvieWer(data.stars)}
                            </div>
                        </div>
                        <div className={styles.button}>
                            <div className='counter'>
                                <input className={styles.input} onChange={(e)=>inputChange(e)} value={value}  type="number" />
                            </div>
                            <button className={styles.price} onClick={()=>addToCart({'id':info, 'count':value})} >{'$ '+Math.floor(value*price)}</button>
                        </div>
                    </div>
                    <div className={styles.description}>    
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




// const addInCart=()=>{
    // if(JSON.parse(localStorage.getItem('cart')).length){
    //     let totalCount = 0
    //     let index
    //     const total = JSON.parse(localStorage.getItem('cart')).filter((item, index) =>{item.id == info})
    //     totalCount=+total[0].count
    //     if(totalCount+value<=15){
    //         if(total.length){
    //             localStorage.setItem('cart', JSON.stringify(
    //             JSON.parse(localStorage.getItem('cart'))
    //             .filter( item => item.id!=info)))
    //         }
    //         localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStorage.getItem('cart')), {id:info, count:Number(totalCount)+Number(value)}]))
    //     }else{
    //         alert("MAX: 15")
    //     }
    // }else{
    //     localStorage.setItem('cart',  JSON.stringify([{id:info, count:value}]) )
    // }
// }