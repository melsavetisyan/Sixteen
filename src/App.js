import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/main/aboutPage/About";
import Home from "./components/main/home/Home";
import NoteFound from "./components/main/noteFound/NoteFound";
import OurProducts from "./components/main/ourProducts/OurProducts";
import Info from "./components/main/info/Info";
import Layout from "./Layout";
import Contact from "./components/main/contact/Contact";
import Favorites from "./components/main/favorites/Favorites";
import Cart from "./components/main/cart/Cart";
import Payment from "./components/main/paymant/Payment";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Our" element={<OurProducts/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Info" element = {<Info/>}/>
        <Route path="/Favorites" element = {<Favorites/>}/>
        <Route path="/Cart" element = {<Cart/>}/>
        <Route path="/Payment" element = {<Payment/>}/>
        <Route path="/*" element={<NoteFound/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
