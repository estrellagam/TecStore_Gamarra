import React from 'react'
import { NavLink } from "react-router-dom";
import { GlobalContext } from '../context/GlobalStateContext'
import { useState, useEffect, useContext } from "react";

const Card = ({ img,descripcion,marca, nombre, precio, id, q }) => {
    const {removeItem} = useContext(GlobalContext);
  return (
   

<tr > 
          <th scope="row">{1}</th>
          <td>{nombre}
        <img src={img} alt="" srcset="" style={{ width: "60px" }}  />
          </td>
          <td>{precio}</td>
          <td>{q}</td>
          <td>{precio*q}</td>
          <td>  <button
          className="btn btn-danger"
          onClick={() => removeItem(id, q, precio)}
          style={{ width: "8rem" }}
        >
          Eliminar {q} Producto/s 
        </button></td>
                  </tr>
 
  )
}
export default Card