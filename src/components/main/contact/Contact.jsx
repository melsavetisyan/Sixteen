import React from "react";
import HeadingPh from "../headingPhoto/HeadingPh";
import contactHeading from "../image/contact-heading.jpg"
import OurLocation from './ourLocation/OurLocation'
import contactStyle from './contactStyle.module.css'
import SendQuestions from "./sendQuestions/SendQuestions";
import HappyPartners from "../aboutPage/happyPartners/HappyParents"

export default function Contact(){

    return(
        <>
            <HeadingPh image={contactHeading} tittle={"CONTACT US"} description={"LET’S GET IN TOUCH"}/>
            {/* <div className={contactStyle.container}> */}
                <OurLocation />
                <SendQuestions/>
            {/* </div> */}
            <HappyPartners tittle={'Our Happy Customers'}/>
        </>
    )
}