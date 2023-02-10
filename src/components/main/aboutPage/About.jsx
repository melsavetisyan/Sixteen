import React from "react";
import HeadingPh from "../headingPhoto/HeadingPh";
import aboutHeading from '../image/about-heading.jpg'
import OurBackground from "./ourBackground/OurBackground";
import abstyle from './abstyle.module.css'
import OurTeammMembers from "./ourTeamMembers/OurTeamMembers";
import Services from "./services/Services";
import HappyPartners from "./happyPartners/HappyParents";

export default function About(){
    return(
        <>
            <HeadingPh image={aboutHeading} tittle={"ABOUT US"} description={"OUR COMPANY"} />
            <div className={abstyle.container}>
            <div className={abstyle.container}>
                <div className={abstyle.aboutUsContainer}>
                    <OurBackground/>
                    <OurTeammMembers/>
                </div>
            </div>
                <Services/>
                <HappyPartners tittle={'Happy Partners'}/>
            </div>
        </>
    )
}