import React from "react";
import happyStyle from './happyStyle.module.css'
import PartnersCard from "./partnerCard/PartnerCard";

export default function HappyPartners(props){
    return(
        <div className={happyStyle.parent}>
            <div className={happyStyle.tittle}><h2 className={happyStyle.h2}>{props.tittle}</h2></div>
            <div className={happyStyle.partners}>
                <PartnersCard/>
                <PartnersCard/>
                <PartnersCard/>
                <PartnersCard/>
                <PartnersCard/>
            </div>
        </div>
    )
}