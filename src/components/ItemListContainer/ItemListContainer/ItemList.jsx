import React from 'react'
import ProductCard from './Item' 
import "./productlist.css"
import { useEffect, useState } from "react";
import { product } from '../../Data/data';

const ItemListContainer = () => {const[products,setProducts]=useState([])

   
  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });
  
    pedido
      .then(
        (res) => {
          setProducts(res);
        },
        (err) => {
          console.log("error", err);
        }
      )
      .then(() => console.log(products)) // playStation
      .catch((err) => console.log(err));
  
    console.log(products); // []
  
    return () => {};
  }, []);
  
  
    return (
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  list " >
  <h1 className="mx-5 mb-5 text-center my-5 py-3">PRODUCTOS DESTACADOS </h1>
  <div className="row d-flex justify-content-evenly mx-5 pt-1 mt-4">
  
  <ProductCard products={products}/>
  
  </div>
  </div>
    )
  }


export default ItemListContainer