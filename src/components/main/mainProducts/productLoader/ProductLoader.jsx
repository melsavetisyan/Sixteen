import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import prodStyles from "./prodStyles.module.css"

export default function ProductLoader(props) {

  const [items, setItems] =  useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [btnActive, setBtnActive] = useState(0)
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
    useEffect(() => {
      const dataFetch = async () => {
        const date = await (await fetch('https://retoolapi.dev/wF9KT5/data')).json();
        setItems(date)
    }
    dataFetch()
    }, []);

  const chngePagination = number =>{
    setBtnActive(number)
    setCurrentPage(number + 1)
  }
   

  return (
    <div>
        <div className={prodStyles.parent}>        
          {items.length && currentItems.map(((elem, index) => typeof props.filter =="number"? index%2===props.filter? <Card key={elem.id} stars={elem.stars} hlink={elem.id}  reviews={elem.reviews} tittle={elem.tittle} description={elem.description} image={elem.image} price={elem.price}/>: "": <Card key={elem.id} className={prodStyles.child}  hlink={elem.id}  stars={elem.stars} reviews={elem.reviews} tittle={elem.tittle} description={elem.description} image={elem.image} price={elem.price}/>))} 
        </div>
      <br />
      <div className={prodStyles.btnsParent}>
        {[...Array(Math.ceil(items.length / itemsPerPage)).keys()].map(number => (
          <button className={number === btnActive?  prodStyles.btnActive: prodStyles.btn} key={number} onClick={() =>chngePagination(number)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}