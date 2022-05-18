import React from 'react'
import { useState,useEffect } from 'react'
import { product} from '../components/Data/data'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
export const GlobalContext = createContext("")

const GlobalStateContext = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [unidades, setUnidades] = useState(0);

  function addItem(product) {
    setCarrito([...carrito, product]);
    setTotal(total + parseInt(product.quantity) * parseInt(product.precio));
    setUnidades(unidades + parseInt(product.quantity));
  }

  function clear() {
    setCarrito([]);
    setTotal(0);
    setUnidades(0);
  }

  function isInCart(p) {
    let is = false;

    carrito.forEach((element) => {
      if (element.id === p) {
        is = true;
        window.alert("Este producto ya se encuentra en su carrito.");
      }
    });

    return is;
  }

  function removeItem(id, q, precio) {
    setCarrito(
      carrito.filter((element, i) => {
        return element.id !== id;
      })
    );
    setTotal(total - parseInt(q) * parseInt(precio));
    setUnidades(unidades - parseInt(q));
  }
    return (
        <GlobalContext.Provider value={{  product,addItem,
        clear,
        isInCart,
        removeItem,
        carrito,
        setCarrito,
        total,
        setTotal,
        unidades,
        setUnidades,}}>
            {children}
        </GlobalContext.Provider>

    )
}

export default GlobalStateContext