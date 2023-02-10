import React from "react";
import image from './image/client-01.png'
export default function PartnersCard(){
    return(
        <div style={{cursor:"pointer"}}>
            <img style={{width:'100%', height: "100%"}} src={image} alt="" />
        </div>
    )
}