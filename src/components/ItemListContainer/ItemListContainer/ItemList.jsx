import React from 'react'
import ProductCard from './Item' 
import "./productlist.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { product } from '../../Data/data';
import { getByText } from '@testing-library/react';
import {collection,getDocs,query,where} from 'firebase/firestore'
import {db} from '../../../service/firebase';
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
  function getText(){
    if(categoria){
      return( <h1 className="mx-5 mb-5 text-center">{categoria.toUpperCase()} </h1> )
}  else if(marca){
  return( <h1 className="mx-5 mb-5 text-center">PRODUCTOS {marca} </h1> )

  }else{
    return( <h1 className="mx-5 mb-5 text-center">NUESTROS PRODUCTOS {categoria} </h1> )
  }
  }
  console.log(categoria)
  
  useEffect(() => {
    /*const pedido = new Promise((resolve, reject) => {
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
  
    return () => {}; */

    const micoleccion= collection(db,"product")
   let q
if(categoria){
  q=query(micoleccion,where('categoria','==',categoria)) 
} else if(marca){
 q= query(micoleccion,where('marca','==',marca)) 
}
else{
  q=micoleccion

}
     getDocs(q)
     .then((datos)=>{
         setProducts(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));
         console.log(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));

     }).finally(()=>{
         console.log("error");
     })


  }, [categoria,marca]);
  
  
    return (
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  list " >
{getText()}
   <div className="row d-flex justify-content-evenly mx-5 pt-1 mt-4">
  
  <ProductCard products={products}/>
  
  </div>
  </div>
    )
  }


export default ItemListContainer