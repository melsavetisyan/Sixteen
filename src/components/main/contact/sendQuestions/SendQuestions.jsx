import React from "react";
import SendingForm from "./sendingForm/SendingForm";
import sendStyle from './sendStyle.module.css'

export default function SendQuestions(){
    return(
        <div className={sendStyle.parent}>
            <div className={sendStyle.container}>
                <div className={sendStyle.tittle}>
                    <h2 className={sendStyle.h2}>Send us a Message</h2>
                </div>
                <SendingForm/>
            </div>
        </div>
    )
}