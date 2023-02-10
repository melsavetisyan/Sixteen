import React from "react";
import MainAbout from "../about/MainAbout";
import Cusp from "../cusp/Cusp";
import Products from "../mainProducts/Prouducts";
import MainSlider from "../mainSlider/MainSlider";

function Home(){
    return(
        <>
            <MainSlider/>
            <Products/>
            <MainAbout/>
            <Cusp/>
        </>
    )
}
export default Home