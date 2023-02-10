import React from "react";
import footerStyle from  './footerStyle.module.css'
function Footer(){
    return(

        <div className={footerStyle.parent}>
              <p>All rigths reserved ©{new Date().getFullYear()} Sixteen Clothing Co., Ltd</p>
        </div>
    )
}

export default Footer