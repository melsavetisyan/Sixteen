import React from "react";
import { GoGear } from "react-icons/go";
import oneStyles from "./oneStyles.module.css"
export default function OneService(){
    return (
        <div className={oneStyles.parent}>
            <div className={oneStyles.serviceItem}>
              <div className={oneStyles.icon}>
                <div className={oneStyles.iconeBg}>
                  <GoGear/>
                </div>
              </div>
              <div className={oneStyles.downContent}>
                <h4 className={oneStyles.h4}>Product Management</h4>
                <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                <a href="" className={oneStyles.button}>Read More</a>
              </div>
            </div>
        </div>
    )
}