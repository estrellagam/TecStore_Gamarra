import React from 'react'
import '../CartWidget/CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalStateContext';
const CartWidget = () => {
  const { unidades, carrito } = useContext(GlobalContext)
console.log("unidades",unidades);
console.log("lent", carrito.length);
  return (
    <div className="d-flex">
    <Link to="/cart"  className='d-flex'> <FontAwesomeIcon icon={faShoppingCart} className="icon shadow-lg " style={{fontSize:"24px"}}/>
     <div className={`${ carrito.length === 0 ? 'hidden' : 'widget' }`}><span id="cart_menu_num" data-action="cart-can" className={`badge rounded-circle d-flex`}
      style={{fontSize:"24px"}}>{unidades}</span></div> 
      </Link>
    </div>





  )
}

export default CartWidget