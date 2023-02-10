import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import navStyles from '../navStyles.module.css'

export default function NavLis(props){

    const navdata = [
        {"id": "1", "name": "Home", "to": "/"},
        {"id": "2", "name": "Our Products", "to": "/Our"},
        {"id": "3", "name": "About Us", "to": "/About"},
        {"id": "4", "name": "Contact Us", "to": "/Contact"},
        {"id": "5", "name": <FiHeart/>, "to": "/Favorites"},
        {"id": "6", "name": <FiShoppingCart/>, "to": "/Cart"}
    ]
    const [active, setActive]= useState()
    useEffect(locationActivation, [window.location.href])
    
    function locationActivation(){
        const locationNow = '/'+window.location.href.split('/').reverse()[0]
        const thisLocationObj = navdata.filter(item => item.to === locationNow)
        if(thisLocationObj.length) setActive(thisLocationObj[0].id)
    }   
    return(
        <>
            {navdata.map(elem => <li key={elem.id} className={!props.inHeader && (active == elem.id)? `${navStyles.liActive}`: navStyles.li} > <Link className={navStyles.link}  to={elem.to}  onClick={()=>{setActive(elem.id)}}>{elem.name}</Link></li>)}
        </>
    )
}