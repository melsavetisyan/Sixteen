import React, { useState, useEffect } from "react";
import locationStyle from   './locationStyle.module.css'
import { FaFacebookF, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import Iframe from 'react-iframe'

export default function OurLocation(){

    return (
        < div className={locationStyle.ourBackground}>
            <div className={locationStyle.container}>
                    <div className={locationStyle.tittle}><h2 className={locationStyle.th2}>Our Background</h2></div>
                    <div className={locationStyle.pictreDesSocilNetworks}>
                        <div className={locationStyle.picture}>
                            <Iframe  className={locationStyle.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195167.57347126456!2d44.348480971491384!3d40.15356842368177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z1LXWgNaH1aHVtiwg1YDVodW11aHVvdW_1aHVtg!5e0!3m2!1shy!2s!4v1673645003750!5m2!1shy!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>    
                        </div>
                        <div className={locationStyle.desSocilNetworks}>
                            <div className="des">
                                <div className={locationStyle.desTittle}>
                                    Who we are & What we do?
                                </div>
                                <div className={locationStyle.des}>
                                    <p className={locationStyle.desP}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        <br /><br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.
                                    </p>
                                </div>
                            </div>
                            <div className={locationStyle.socialNetworks}>
                                <ul className={locationStyle.snnav}>
                                    <li className={locationStyle.snli}><a className={locationStyle.faA} target='_blank' href="https://www.facebook.com"><FaFacebookF/></a></li>
                                    <li className={locationStyle.snli}><a className={locationStyle.faA} target='_blank' href="https://twitter.com"><FaTwitter/></a></li>
                                    <li className={locationStyle.snli}><a className={locationStyle.faA} target='_blank' href="https://www.linkedin.com/"><FaLinkedin/></a></li>
                                    <li className={locationStyle.snli}><a className={locationStyle.faA} target='_blank' href="https://www.behance.net/"><FaBehance/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}