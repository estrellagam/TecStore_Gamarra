import React from 'react'
import ItemCount from "../ItemListContainer/ItemListContainer/ItemCount"
import "./detail.css"
const ItemDetail = ({ producto }) => {
  const onAdd = (count) => {
    alert(`Agregaste a tu carrito!`);
  

  };
  return (
 
 <div className='detail column d-flex'>
  
     <> 
    
     <div className='px-2 col-6 pt-2 imgDetail'>    <img src={producto.img} className="card-img-top" alt="..."/></div>
     <div className='col-5 pt-5 mt-2'>
<div> <h3>{producto.nombre }</h3> <br />
       <p className='mx-2 pt-3 text-justify'>{producto.descripcion}</p>
      <h4 className='mx-2 pt-3 text-end'><span>s/.</span>{producto.precio}</h4>

       </div>
   <div><ItemCount onAdd={onAdd} stock={producto.stock}/></div>
</div>
    
     </>

     </div>
    
   
 )
}

export default ItemDetail