import React from "react";
import { Link } from "react-router-dom";
function Logo(){
   const styles={
        h1:{
            fontSize: '24px',
            color: '#fff',
            textTransform: 'uppercase',
            textDecoration:'none',
            textAlign:'start'
        },
        span:{
            color:"#f33f3f"
        }
    }
    return (
        <h1 style={styles.h1}>
            <Link style={styles.h1} to='/'>
                SIXTEEN <span style={styles.span}>CLOTHING</span>
            </Link>
        </h1>
    )
}

export default Logo