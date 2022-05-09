import React from 'react'
import "./productlist.css"
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  

  };
    return (
  
      <>
        {  products.length > 0 ? (
          products.map((product, index) => (
            <>
              <div className="card my-3 d-flex align-items-center shadow-sm px-0" style={{width: "18rem"}}>
    <img src={product.img} className="card-img-top" alt="..."/>
    <div className="card-body m-0 p-0 w-100">
      <p className="card-text text-center"  key={product.id}>{product.nombre}</p>
      <h6 className="card-title text-center">{product.marca}</h6>
      <h5 className="card-title text-center py-2"><span></span>{product.precio}</h5>
     <center> <Link to={`/item-detail/${product.id}`} className='btn btn-dark my-4'>Ver detalle</Link>
     </center> 
    </div>
  </div>
            </>
          ))
        ) : (
          <div class="spinner"></div>

        )} 
        
      </>
    );
  };


export default ProductCard