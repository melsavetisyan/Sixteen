import React, {useEffect,useState } from "react";
import axios from "axios";

export default function GetFullPrice(){
    const [location, setLocation] = window.location.href
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem('cart')))
    const [datas, setDatas] = useState([])
    const [fullPrice, setFullPrice] = useState([])
    
    useState(()=>{
        if(location.split('?info')[1]){
            const [id, count] = location.split('?info')[1].split('&').map(item=> item.split('IS')[1])
            setLocal([{id:id, count:count}])
        }else if(JSON.parse(localStorage.getItem('cart'))){
            setLocal(JSON.parse(localStorage.getItem('cart')))
        }
    })

    useEffect(() => {
        async function  getAxios(item){
            await axios.get(`https://retoolapi.dev/wF9KT5/data/${item.id}`)
                       .then(response => setDatas(prev => [...prev, {...response.data, count:item.count}]))
        }
        local.map(item => getAxios(item) )        
    }, [local])

    useEffect(()=>{
        if(datas.length>1){
            setFullPrice(datas.map(data => Number(data.count) * Number(data.price.split('$')[1])).reduce((a, b) => a+b))
        }else if(datas.length === 1){
            setFullPrice(datas.map(data => Number(data.count) * Number(data.price.split('$')[1])))
        }
    }, [datas])

    return '$'+fullPrice
}