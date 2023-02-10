import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import OTMStyle from './OTMStyle.module.css'

export default function OTMCard(props){
    const elem = props.props
    
    return(
          <div className={OTMStyle.card}>
            <div className={OTMStyle.parent }>
              <div className={OTMStyle.imgAndHover }>
                <img className={OTMStyle.img} src={elem.image} alt=""/>
                <div className={OTMStyle.hoverEffect }>
                  <div className={OTMStyle.socialNetwork}>
                      <ul className={OTMStyle.snnav}>
                          <li className={OTMStyle.snli}><a className={OTMStyle.faA} target='_blank' href="https://www.facebook.com"><FaFacebookF/></a></li>
                          <li className={OTMStyle.snli}><a className={OTMStyle.faA} target='_blank' href="https://twitter.com"><FaTwitter/></a></li>
                          <li className={OTMStyle.snli}><a className={OTMStyle.faA} target='_blank' href="https://www.linkedin.com/"><FaLinkedin/></a></li>
                          <li className={OTMStyle.snli}><a className={OTMStyle.faA} target='_blank' href="https://www.behance.net/"><FaBehance/></a></li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className={OTMStyle.downContent }>
                <h4 className={OTMStyle.h4}>{elem.name}</h4>
                <span className={OTMStyle.span}>{elem.profession}</span>
                <p className={OTMStyle.p}>{elem.description}</p>
              </div>
            </div>
          </div>
    )
}