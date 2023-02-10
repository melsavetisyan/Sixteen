import React from "react"
import aboutStyle from "./aboutStyle.module.css"
import aboutimg from "./image/aboutimg.jpg"

function MainAbout (){

    return(
    <div className={aboutStyle.parent}>
        <div className={aboutStyle.container}>
            <div className={aboutStyle.firstTittle}>
                <h2 className={aboutStyle.fth2}>
                    About Sixteen Clothing
                </h2>
            </div>
            <div className={aboutStyle.infoAndImg}>
                <div className={aboutStyle.info}>
                    <h4 className={aboutStyle.h4}>Looking for the best products?</h4>
                    <p className={aboutStyle.p}><a className={aboutStyle.a} rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_blank">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a target='_blank' className={aboutStyle.a} rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p>
                    <ul className={aboutStyle.ul}>
                        <li><a className={aboutStyle.a2}href="#">Lorem ipsum dolor sit amet</a></li>
                        <li><a className={aboutStyle.a2}href="#">Consectetur an adipisicing elit</a></li>
                        <li><a className={aboutStyle.a2}href="#">It aquecorporis nulla aspernatur</a></li>
                        <li><a className={aboutStyle.a2}href="#">Corporis, omnis doloremque</a></li>
                        <li><a className={aboutStyle.a2}href="#">Non cum id reprehenderit</a></li>
                    </ul>
                    <a className={aboutStyle.a3} href="#"> Read More</a>
                </div>
                <div className={aboutStyle.imgDiv}>
                    <img className={aboutStyle.image} src={aboutimg} alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainAbout