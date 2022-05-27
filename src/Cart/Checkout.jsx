import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStateContext'
import { NavLink,Link } from 'react-router-dom'
import "./Cart.css"
import { product } from '../components/Data/data'
import Cart from './Cart'
import { useState, useEffect} from "react";
import Formulario from './Formulario'

const Checkout = () => {
    const { carrito } = useContext(GlobalContext);


    return (
        <section class="info-section detail py-1" >
    <div className="container">
                <div className="row">
                    <div className="col-md-6  pt-5">
                        <Cart />
                    </div>
                    <div className="col-md-6 pt-5 ">
                    <>
        {carrito.length > 0 ? (
      
            <Formulario/>
    
          
        ) : (
          ""
        )}
      </>
               

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Checkout