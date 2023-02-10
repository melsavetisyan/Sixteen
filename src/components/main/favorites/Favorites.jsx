import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Card from "../mainProducts/productLoader/card/Card"
import styles from './favStyles.module.css'

export default function Favorites(){
    const [datas, setDatas] = useState([])
    const [loc, setLoc] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        if(loc){async function request(item){
            await axios.get(`https://retoolapi.dev/wF9KT5/data/${item}`)
            .then(response=>setDatas(prev=>[...prev, response.data]))
        }
        
        Object.keys(loc).map(item =>{
            if(item==loc[item]){
                request(item)
            }
        })}

        else{
            setEmpty('You are not have favorite items...')
            console.log(empty);
        }
        if(!datas.length){
            setEmpty('You are not have favorite items...')
        }

    }, [])
    
    return(
        <div className={styles.parentOutContainer}>
            <div className={styles.container}>
                    {datas.length?
                        <div className={styles.parent}>
                            {datas.map((data) => <Card key={data.id} stars={data.stars} hlink={`${data.id}`}  reviews={data.reviews} tittle={data.tittle} description={data.description} image={data.image} price={data.price}/>)}
                        </div>
                            :
                        <div className={styles.empty}>
                            {empty}
                        </div>}
            </div>
        </div>
    )
}