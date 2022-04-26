import React from 'react'
import Img3 from '../../../assets/hp1.png'
import "../ProductList/productlist.css"
import ItemCount from './ItemCount'
const ProductCard = () => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
  return (
    
  <div className="card my-3 d-flex align-items-center shadow-sm px-0" style={{width: "18rem"}}>
  <img src={Img3} className="card-img-top" alt="..."/>
  <div className="card-body m-0 p-0 w-100">
    <p className="card-text text-center">LAPTOP HP 15-EF1009LA</p>
    <h6 className="card-title text-center">HP</h6>
    <ItemCount onAdd={onAdd} />
  </div>
</div>
   
  )
}

export default ProductCard