import React from 'react'
import ProductCard from './Item' 
import "./productlist.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { product } from '../../Data/data';

const ItemListContainer = () => {
  const[products,setProducts]=useState([])
  const { marca } = useParams()
  const { categoria } = useParams()

  console.log(categoria);
  function getCategoria(res){
    if (categoria) {
    setProducts(product.filter((prod)=> prod.categoria === categoria))

  } else if(marca){
  setProducts(product.filter((prod)=> prod.marca === marca))

  }else{
 setProducts(product)
  }
  }
  
  console.log(categoria)
  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        
  resolve(product);

     }, 1000);
    });
  
    pedido
      .then(
        (res) => {
     getCategoria(res)
        },
        (err) => {
          console.log("error", err);
        }
      )
      .then(() => console.log(products)) // playStation
      .catch((err) => console.log(err));
  
    console.log(products); 
  
    return () => {};
  }, [categoria,marca]);
  
  
    return (
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  list " >
  <h1 className="mx-5 mb-5 text-center">PRODUCTOS DESTACADOS </h1>
  <div className="row d-flex justify-content-evenly mx-5 pt-1 mt-4">
  
  <ProductCard products={products}/>
  
  </div>
  </div>
    )
  }


export default ItemListContainer