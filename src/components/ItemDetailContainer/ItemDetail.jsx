import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { NavLink,Link } from 'react-router-dom'
import ItemCount from "../ItemListContainer/ItemListContainer/ItemCount"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalStateContext';
import "./detail.css"


const ItemDetail = ({ producto: { id,img, nombre, descripcion, precio, stock, marca } }) => {


  const [cantidad, setCantidad] = useState(0)

  const [visible, setVisible] = useState("block");

  const { product, addItem, clear, isInCart, removeItem, carrito, setCarrito ,total} = useContext(GlobalContext);


  const onAdd = (cantidad) => {
    setCantidad(cantidad)
   setVisible("none")
   let is = isInCart(id);
    if(!is){
      addItem({
        id: id,
        nombre: nombre,
     marca:marca,
        descripcion: descripcion,
        precio:precio,
        img: img,
        quantity : cantidad
      })
    }
  };


 const [state, setState] = useState({

 })

  
 useEffect(() => {
  const pedido = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(onAdd);
    }, 0);
  });

  pedido
    .then(
      (res) =>
        cantidad > 0
          ? console.log("Se agregaron los elementos" +  carrito.map((e, i)=>{
            console.log(e)
          }))
          : "",
      (err) => {
        console.log("error", err);
      }
    )
    .catch((err) => console.log(err));
  return () => {};
}, [cantidad]);
  return (

    <section class="info-section detail py-5" >
    <>

      <div class="container">
        <div class="row">
          <div class="col-md-6  pt-3">
            <img src={img} style={{ width: "100%" }} className="card-img-top" alt="..." />
          </div>
          <div class="col-md-6 pt-5 ">
            <div className='d-flex fontP '>
              <FontAwesomeIcon icon={faTruckFast} className="text-end iconDetail shadow-lg" style={{ fontSize: "20px" }} />
              <p className=" text-end">Llega gratis mañana </p>

            </div>
            <h3 className='mt-2'>{nombre}</h3> <br />
            <h6>{marca}</h6>
            <p className=' text-muted  mx-2 pt-3 text-justify'>{descripcion}</p>

            <h4 className='mx-2 pt-3 text-end'><span>s/.</span>{precio}</h4> <p className='d-flex stock text-muted'>({stock} disponibles)</p>

            {cantidad > 0 ? (
              <Link to={'/cart'} className="btn mt-2 rounded-bottom addProd" style={{ width: "100%" }}
              >Terminar Compra</Link>

            ) : (
              <div><ItemCount onAdd={onAdd} stock={stock} /></div>

            )}
          </div>
        </div>
      </div>

    </>
  </section>
  )
}

export default ItemDetail