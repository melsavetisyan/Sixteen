import React from "react";
import OTMCard from "./otmCard/OTMCard";
import otmStyle from './otmStyle.module.css'
import team from './team.json'
export default function OurTeammMembers(){

    return(
        <div className={otmStyle.obg}>
            <div className={otmStyle.container}>
                <div className={otmStyle.tittle}><h2 className={otmStyle.th2}>Our Team Members</h2></div>  
                <div className={otmStyle.cardParent}>
                    {team.map(item => <OTMCard key={item.id} props={item}/>)}
                </div>
            </div>
        </div>
    )
}