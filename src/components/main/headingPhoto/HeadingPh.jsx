import React from "react";
import hstyle from './hstyle.module.css'

export default function HeadingPh(props){
    return(
        <div className={hstyle.image} style={{backgroundImage:`url(${props.image})`}}>
            <div className={hstyle.container}>
                <div className={hstyle.tittle}>{props.tittle}</div>
                <div className={hstyle.description}>{props.description}</div>
            </div>
        </div>
    )
}