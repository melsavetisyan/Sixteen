import React from "react";
import cupsStyle from "./cupsStyle.module.css"
function Cusp(){

    return(
      <div className={cupsStyle.container}>
        <div className={cupsStyle.parent} >
              <div className={cupsStyle.fchild}>
                <div className={cupsStyle.hp}>
                  <h4 className={cupsStyle.h4}>Creative &amp; Unique <em>Sixteen</em> Products</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div>
                  <a className={cupsStyle.a3}href="#">Purchase Now</a>
                </div>
              </div> 
        </div>
      </div>
    )
}

export default Cusp