import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function Layout() {
  const styles={
    display:'flex',
    flexDirection:'column',
   // justifyContent:'space-between',
    alignItems:'center',
    width: "100%",
    minHeight: '100vh',
    justifyContent: 'space-between'
  }
  const mainStyles={
    display:'flex',
    flexDirection:'column',
   // justifyContent:'space-between',
    alignItems:'center',
    width: "100%",
  }

  return (
    <div style={{...styles }}>
      <Header/>
      <main style={mainStyles} >
        <Outlet style={{width: '100%'}}/>
      </main>
      {/* <Home/> */}
      <Footer/>
    </div>
  )
}
