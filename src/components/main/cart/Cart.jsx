import React, {useState, useEffect} from "react";
import CartCard from "./cartCard/CartCard";
import axios from "axios";
import styles from './cartStyles.module.css'
import { Link } from "react-router-dom";

export default function Cart(){
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)
    const [datas, setDatas] = useState([])
    const [loc, setLoc] = useState(JSON.parse(localStorage.getItem('cart')))
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        if(loc){async function request(item){
            await axios.get(`https://retoolapi.dev/wF9KT5/data/${item.id}`)
            .then(response=>setDatas(prev=> [...prev, {...response.data, count: item.count}]))
            console.log(item)
        }
    
        loc.map(item =>request(item))}

        else{
            setEmpty('Your cart is empty...')
            console.log(empty);
        }
        if(!datas.length){
            setEmpty('Your cart is empty...')
        }

    }, [])

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('cart'))){
            setCart([...JSON.parse(localStorage.getItem('cart'))])
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    function removeFromCart(item){
        setCart(cart.filter(i => i.id !== item.id));
    };
    // function modalShowFunction(price){
    //     setModalOpen(!modalOpen)
    // }

    return(
        <>  
            {/* {empty? <div className={styles.emp}>{empty} </div>: datas.map( obj=> <CartCard image={obj.image} key={obj.id} count={obj.count} price={obj.price} tittle={obj.tittle} stars={obj.stars} reviews={obj.reviews} id={obj.id} hlink={obj.id} />)}     */}

        <div className={styles.parentOutContainer}>
            <div className={styles.container}>
                    {datas.length?
                        <div className={styles.parentAndBtn}>
                            <div className={styles.parent}>
                                {datas.map((obj) => <CartCard image={obj.image} key={obj.id} count={obj.count} price={obj.price} tittle={obj.tittle} stars={obj.stars} reviews={obj.reviews} id={obj.id} hlink={obj.id} />)}
                            </div>
                            
                            <div className={styles.buyAll}>
                                <Link to='/Payment' className={styles.buyAllButton}>
                                    ${datas.map(data => Number(data.count) * Number(data.price.split('$')[1])).reduce((a, b) => a+b) }
                                </Link>
                            </div>

                        </div>
                            :
                        <div className={styles.empty}>
                            {empty}
                        </div>}

            </div>
        </div>
        
        </>
    )
}