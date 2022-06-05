import React from 'react'
import { useState,useEffect } from 'react'
import { product} from '../components/Data/data'
import { createContext ,useContext} from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
export const GlobalContext = createContext("")
export const GlobalProvider = () => useContext(GlobalContext)

const GlobalStateContext = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [unidades, setUnidades] = useState(0);
  const [loading,setLoading] = useState(false)
  const[ticket,setTicket]= useState("");


   

  //local storage
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
  setCarrito(carritoLS)
  
  const un = JSON.parse(localStorage.getItem('unidades')) ?? 0
  const tot= JSON.parse(localStorage.getItem('total')) ?? 0

  setCarrito(carritoLS)
  setUnidades(un)
  setTotal(tot)

  }, [])

 useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))
      localStorage.setItem('unidades', JSON.stringify(unidades))
      localStorage.setItem('total', JSON.stringify(total))

 
    }, [carrito],[unidades])

  
   

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
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Este producto ya se encuentra en su carrito.',
        })
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
        setLoading,
        setCarrito,
        total,
        setTotal,
        unidades,
        setUnidades,ticket,
        setTicket}}>
            {children}
        </GlobalContext.Provider>

    )
}

export default GlobalStateContext