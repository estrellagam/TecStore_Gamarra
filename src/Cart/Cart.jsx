import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStateContext'
import { NavLink,Link } from 'react-router-dom'
import "./Cart.css"
import Card from "./Card"
import { product } from '../components/Data/data'

const Cart = () => {
  const { carrito, clear, total } = useContext(GlobalContext);

  return (
    <div className="cart col-12" id="">
      <div
        className="row col-12"
        style={{ float: "center", display: "flex", marginTop: "1%" }}
      >
    <div className='col-md-6'> <h3 className="txt1">Resumen de tu carrito</h3>
      </div>   

      <>
        {carrito.length > 0 ? (
       <div className='col-md-6 px-5'>
       <button
       style={{ width:"122px", marginLeft:"auto" ,marginRight:"30px",marginTop:"19px" }}
             className=" btn btn-dark"
             onClick={() => clear()}
           >
             Vaciar Carrito
           </button></div>
        ) : (
          ""
        )}
      </>
  
      </div>
      <>
        {carrito.length > 0 ? (
          <div className="row col-12" style={{ float: "center" }}>
        
          </div>
        ) : (
          ""
        )}
      </>

      <div className="row col-12" style={{ float: "center", marginTop: "1%" }}>
        <div className="row col-12 mt-2">
        

          <>
            {carrito.length > 0 ? (
              <div className="divTable">   <table className="table m-4 w-75">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <>{
carrito.map((item, index) => (
  <React.Fragment key={index}>
    <Card
      img={item.img}
      marca={item.marca}
      descripcion={item.descripcion}
      nombre={item.nombre}
      precio={item.precio}
      id={item.id}
      q={item.quantity}
    ></Card>
  </React.Fragment>
)) 
                }</>


          
               </tbody>
  </table> </div>
            )  
           : (
           <div>
                <h3
                  className="txt1"
                  style={{
                    margin: "3%",
                    justifyContent: "space-around",
                  }}
                >
                  No hay elementos en el carrito
                </h3>
                <button
                  className="btn btn-dark"
                  style={{
                    width: "20rem",
                    margin: "3%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <NavLink className="btn text-white" to="/">
                    Volver a Home
                  </NavLink>
                </button>
              </div>
            )}
          </>
        </div>
      </div>
      <>
        {carrito.length > 0 ? (
          <div
            className=""
          >
            <p
              className=" "
              style={{
                width: "15rem",
                marginLeft: "auto",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              Total de la compra: s/.{total}
            </p>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}



export default Cart
