import React, {useState} from "react";
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
  window.data = formData

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic goes here
  };
  const inputChangeFn = (e, name) =>{
    // setFormData({...formData, [name]:e.target.value })
    
    switch(name){
      case "CARD_NUMBER":
      if(!isNaN(+e.target.value.split(' ').join(""))){
        
        if(e.target.value.length<20){
          setFormData({...formData, [name]:e.target.value})          
          if(formData[name].length%4 === 0 && formData[name]>3){
            setFormData({...formData, [name]:formData[name]+' '})
          }
        }
      }
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <div className={styles.formDiv} >
        <input className={styles.input} onInput={(e)=>inputChangeFn(e, "CARD_NUMBER")} type='tel'  value={formData.CARD_NUMBER} placeholder="Card Number"/>
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