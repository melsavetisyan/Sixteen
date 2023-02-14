import React, {useEffect, useState} from "react";
// import CreditCardInput from 'react-credit-card-input'

import * as yup from 'yup';

import styles from './payment.module.css'
export default function Payment(){
  const [id, count] = window.location.href.split('info').length>=2 ? window.location.href.split('info')[1].split("&").map(item=> item.split("IS")[1]) : [0, 0]
  const [btn, setBtn] = useState(false)
  const [formData, setFormData] = useState({
    CARD_NUMBER: '',
    MM_YY: '',
    E_MAIL: '',
    CVC: '',
  });

  // let userSchema = object({
  //   CARD_NUMBER: number().required(),
  //   MM_YY: number().required().positive().integer(),
  //   E_MAIL: string().email(),
  //   CVC: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
  // });
  const [changedCard, setChangedCard] = useState(formData.CARD_NUMBER)
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
  

  window.data = formData

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic goes here
  };
  const inputChangeFn = (e, name) =>{
    // setFormData({...formData, [name]:e.target.value })

    switch(name){
      case "CARD_NUMBER":
        if(changedCard.split('').reverse[0] === " "){
          
        }
        if(!isNaN(+e.target.value.split(' ').join(""))){
          if(e.target.value.length<20){
            setFormData({...formData, [name]:e.target.value.split(' ').join("")})          
          }
        }
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <div className={styles.formDiv} >
        <input className={styles.input} onInput={(e)=>inputChangeFn(e, "CARD_NUMBER")} type='tel'  value={changedCard} placeholder="Card Number"/>
        <input className={styles.input} onInput={(e)=>inputChangeFn(e, "MM_YY")} type="tel"   value={formData.MM_YY} placeholder="MM/YY" />
        <input className={styles.input} onInput={(e)=>inputChangeFn(e, "E_MAIL")} type='email' value={formData.E_MAIL}  placeholder="E-Mail" />
        <input className={styles.input} onInput={(e)=>inputChangeFn(e, "CVC")} type="password"  value={formData.CVC} placeholder="CVC" />
      </div>

      <button className={btn ? styles.formBtn : styles.noneBtn} type="submit" >
        Buy
      </button>
    </form>
  );

}