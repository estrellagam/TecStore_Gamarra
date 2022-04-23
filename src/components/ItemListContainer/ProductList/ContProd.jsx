import React from 'react'
import { useState } from 'react'
import "../ProductList/productlist.css"

const ContProd = () => {
    const[contador,setContador]=useState(1)
  return (
      <div className='d-flex justify-content-evenly w-100'>
    <div className='d-flex justify-content-around rounded-pill bg-light w-50 py-1' style={{backgroundColor:"#dedede"}}>
    <button className='rounded-circle border-0 bg-white' onClick={()=> setContador(contador-1)} style={{width: "2rem"}}>-</button>
      <h6>{contador}</h6> 
   <button  className='rounded-circle border-0 bg-white' onClick={()=> setContador(contador+1)}  style={{width: "2rem"}}>+</button>
    </div>
    </div>
  )
}

export default ContProd

//un state es un hook que permite almacenar valores
//el state tiene 2 componentes