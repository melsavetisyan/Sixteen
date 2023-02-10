import React from "react";
import OneService from "./service/OneService";
import servicesStyle from './servicesStyle.module.css'

export default function Services(){
    return(
    <div className={servicesStyle.services}>
      <div className={servicesStyle.container}>
        <div className={servicesStyle.row}>
          <OneService/>
          <OneService/>
          <OneService/>
        </div>
      </div>
    </div>
    )
}