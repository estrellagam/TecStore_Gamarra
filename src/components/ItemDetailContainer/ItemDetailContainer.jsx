import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { product } from '../Data/data'
const ItemDetailContainer = () => {
 const { id } = useParams()
  const [producto, setProducto] = useState(null)

  const productofiltrado = product.find((prod)=> prod.id === Number(id))
  console.log(productofiltrado)
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
}).then(()=>console.log(producto)).catch((err)=>console.log(err));

},[]);
console.log("MMM33"+producto);

  return (
    <>
      {product ? <ItemDetail producto={productofiltrado} /> : <h1>Cargando..</h1>}
    </>
  )
}

export default ItemDetailContainer