import React, {useEffect, useState} from "react";
import Logo from "./logo/Logo";
import NavBar from "./navBar/NavBar";
import NavLis from "./navBar/navLis/NavLis";
import headStyles from './headStyles.module.css'
function Header(){
    const [width, setWidth] = useState(window.innerWidth);
    const [disNone, setDisNone] = useState(true)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    const styles={
        disnOpen:{
            height:'100%',
            display:'block',
        },
        disnClose:{
            height:'0',
            display:'none',
        }
    }
    return(
        <header className={headStyles.header} >
            <div className={headStyles.container}>
                <Logo/>
                <NavBar setfunc={() => setDisNone(prev=>!prev)}/>
            </div>
            {width<1200?(
                <div className={headStyles.ulLiBurger} style={disNone? styles.disnClose:styles.disnOpen}>
                    <nav className={headStyles.nav35}>
                        <div className={headStyles.ulContainer}>
                            <ul className={headStyles.ul36} style={{textlign:"center"}}>
                                <NavLis/>
                            </ul>
                        </div>
                    </nav>
                </div>
            ):(<></>)
            }
            
        </header>
    )
}

export default Header