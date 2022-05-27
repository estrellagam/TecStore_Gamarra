import React from 'react'
import { NavLink } from "react-router-dom";
import { GlobalContext } from '../context/GlobalStateContext'
import { useState, useEffect, useContext } from "react";

const Row= ({ img,descripcion,marca, nombre, precio, id, q }) => {
    const {removeItem} = useContext(GlobalContext);
    let num
    if (q==1) {
      num="producto"
    }else{
      num="productos"
    }
  return (


<tr  style={{ fontSize:"14px"}} > 
          <th scope="row">#{id}</th>
          <td>{nombre}
        <img src={img} alt="" srcset="" style={{ width: "60px" }}  />
          </td>
          <td>{precio}</td>
          <td>{q}</td>
          <td>{precio*q}</td>
          <td>  <button
          className="btn btn-danger"
          onClick={() => removeItem(id, q, precio)}
          style={{ width: "8rem", fontSize:"10px"}}
        >
          Eliminar {q} {num} 
        </button></td>
                  </tr>
 
  )
}
export default Row