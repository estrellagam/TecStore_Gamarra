import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { product } from '../Data/data'
import { collection,getDoc, getDocs } from 'firebase/firestore'
import {db} from '../../service/firebase';
import { async } from '@firebase/util'
const ItemDetailContainer = () => {
 const { id } = useParams()
  const [producto, setProducto] = useState([])
 console.log(producto);
console.log(id);

 const getData=async()=>{
const col = collection(db,"product")
try {
  const data= await getDocs(col)
  const result = data.docs.map(doc=> doc ={ id:doc.id,...doc.data()})
  console.log(result);

  const searchProducto = result.find((prod)=> prod.id === Number(id))
  console.log("producto encontraod",searchProducto);
  setProducto(searchProducto)} 
catch (error) {
  console.log(error);
}
 }

 useEffect(()=>{
   getData()
 },[])

 console.log(producto);


/*
  useEffect(() => {
 const getItemPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productofiltrado);
      }, 2000);

 });
 getItemPromise
 .then((res) => {
   setProducto(res);
   console.log("MMM"+producto);
}).then(()=>console.log(producto)).catch((err)=>console.log(err));  */


  return (
    <>
    {product ? <ItemDetail producto={producto} /> : <h1>Cargando..</h1>}
  </>
  )
}

export default ItemDetailContainer