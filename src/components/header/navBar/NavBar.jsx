import React, { useEffect, useState } from "react";
import { BurgerClose as Burger, BurgerClose } from "react-burger-icons";
import navStyles from './navStyles.module.css'
import NavLis from "./navLis/NavLis";
import  { FiHeart } from "react-icons/fi";
import  { FiShoppingCart } from "react-icons/fi";

export default function NavBar(props){
    const navdata = [
        {"id": "1", "name": "Home", "to": "/"},
        {"id": "2", "name": "Our Products", "to": "/Our"},
        {"id": "3", "name": "About Us", "to": "/About"},
        {"id": "4", "name": "Contact Us", "to": "/Contact"},
        {"id": "5", "name": <FiHeart/>, "to": "/Favorites"},
        {"id": "6", "name": <FiShoppingCart/>, "to": "/Cart"}
    ]
    const [isClosed, setIsClosed] = useState(false);
    useEffect(locationActivation, [])
    
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    

    function locationActivation(){
        const locationNow = '/'+window.location.href.split('/').reverse()[0]
        const thisLocationObj = navdata.filter(item => item.to === locationNow)
    }

    const burgerClick = ()=>{
        setIsClosed(!isClosed)
        props.setfunc()
    }

    return(
        <>
        {width<1200? (
        <button className={navStyles.burgerBtn} onClick={burgerClick}>
                    <Burger isClosed={isClosed} />
        </button>
        ): (
        <nav className="asdas">
            <ul className={navStyles.ul}>
               <NavLis inHeader={false}/>
            </ul>
        </nav>
        )}
        </>
    )
}