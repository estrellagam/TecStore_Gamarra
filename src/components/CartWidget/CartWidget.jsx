import React from 'react'
import '../CartWidget/CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div className='d-flex'><FontAwesomeIcon icon={faShoppingCart} className="icon shadow-lg" style={{fontSize:"24px"}}/>
      <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle d-flex">1</span>

    </div>
  )
}

export default CartWidget