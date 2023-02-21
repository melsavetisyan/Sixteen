import React, {useEffect, useState} from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import ReactLoading from  'react-loading'
import GetFullPrice from "./getPrices/GetFullPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from './payment.module.css'

export default function Payment(){
  const [ls, setLs] = useState(JSON.parse(localStorage.getItem('cart')))
  const [btn, setBtn] = useState(false)
  const [focuse, setFocuse] = useState()
  const [loading, setLoading] = useState(false)
  const [loadingInner, setLoadingInner] = useState(<ReactLoading type="spin" color='#357EDD'/>)
  const [formData, setFormData] = useState({
    CARD_NUMBER: '',
    MM_YY: '',
    NAME: '',
    CVC: '',
  });
  const [changedCard, setChangedCard] = useState(formData.CARD_NUMBER)
  const [allOrOne, setAllOrOne] = useState()

  useState(()=>{
    const wlhs = window.location.href.split('?infoidIS')
    wlhs.length === 2 ? setAllOrOne(wlhs[1][0]) : setAllOrOne('all')
  }, [])
  useEffect(() => {
    setChangedCard(
      String(formData.CARD_NUMBER).split('').map((figure, index) =>{
        if((index+1)%4===0 && index>0   ){
              console.log(figure, index)
            return `${figure} `
        }
        return figure
      }
    ).join(''))
  }, [formData])
  useEffect(() => {
    if(formData.CARD_NUMBER.length === 16 && formData.MM_YY.length === 4 && formData.NAME.length > 2 && formData.CVC.length === 3){
      setBtn(true)
    }else{
      setBtn(false)
    }
  }, [formData])
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(ls))
  },[ls])

  const handleSubmit = (event) => event.preventDefault()
  const inputChangeFn = async (e, name) =>{
    switch(name){
      case "CARD_NUMBER":
        if(changedCard.split('').reverse[0] === " "){ 
        }
        if(!isNaN(+e.target.value.split(' ').join(""))){
          if(e.target.value.length<20){
            setFormData({...formData, [name]:e.target.value.split(' ').join("")})          
          }
        }
        break
      case "NAME":
        setFormData({...formData, [name]:e.target.value.toUpperCase()})
        break
      case "MM_YY":
        if(e.target.value.length<=4 && !isNaN(e.target.value)){
          setFormData({...formData, [name]:e.target.value})
        }
        break
      case "CVC":
        if(e.target.value.length<=3 && !isNaN(e.target.value)){
          setFormData({...formData, [name]:e.target.value})
        }
        break
    }
  }
  const handleInputFocus = name => setFocuse(name)
  
  const btnClick =()=>{
    if(btn){
      setLoading(true)
      setInterval(() => {
        setLoadingInner(<div className={styles.thanks}>Thank you for your purchase <FontAwesomeIcon icon={faCheck} /></div>)
        setInterval(() => window.location.replace('/'), 2000);
      }, 2000)
      allOrOne === 'all' ? setLs([]) : setLs( ls.filter(item => item.id != allOrOne))
    }
  }

  return (
    <>
        <div className={styles.outParent}>
          <div className={styles.container}>
            { loading ?
                loadingInner
              :
            <div className={styles.parent}>
               <Cards cvc={formData.CVC} expiry={formData.MM_YY}  focused={focuse} name={formData.NAME} number={changedCard} />
                <form className={styles.form} onSubmit={handleSubmit} >
                  <div className={styles.formDiv} >
                    <input className={styles.input}  onFocus={()=>handleInputFocus('number')} onInput={(e)=>inputChangeFn(e, "CARD_NUMBER")} type='tel'  value={changedCard.trim( )} placeholder="Card Number"/>
                    <input className={styles.input}  onFocus={()=>handleInputFocus('name')} onInput={(e)=>inputChangeFn(e, "NAME")} type='text' value={formData.NAME}  placeholder="Full Name" />
                    <input className={styles.input}  onFocus={()=>handleInputFocus('expiry')} onInput={(e)=>inputChangeFn(e, "MM_YY")} type="tel"   value={formData.MM_YY} placeholder="MM/YY" />
                    <input className={styles.input}  onFocus={()=>handleInputFocus('cvc')} onInput={(e)=>inputChangeFn(e, "CVC")} type="password"  value={formData.CVC} placeholder="CVC" />
                  </div>
                  <button className={btn ? styles.formBtn : styles.noneBtn} onClick={btnClick} type="submit" ><GetFullPrice/></button>
                </form>
            </div>
            }
          </div>
        </div>
    </>  
  );
}