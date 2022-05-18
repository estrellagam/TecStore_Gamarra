import React from 'react'
import { useState } from 'react'
import "./productlist.css"
import { Link } from 'react-router-dom'
const ItemCount = ({ onAdd, stock}) => {

    const initial = 1;
   


    const [count, setCount] = useState(initial);

    //esta función recibe por parámetro un número que se sumará al valor inicial
    //del estado qty. De esta manera podremos sumar y restar con una misma función
    const addProduct = (num) => {
        setCount(count + num);
    };

    return (
        <div className='d-flex row justify-content-evenly w-100 m-0'>
            <div className='d-flex justify-content-around rounded-pill bg-light w-50 py-1' style={{ backgroundColor: "#dedede" }}>
                <button className='rounded-circle border-0 bg-white' onClick={() => addProduct(-1)}
                    disabled={count === initial ? true : null} style={ { width: "2rem" }}>-</button>
                <h6>{count}</h6>
                <button className='rounded-circle border-0 bg-white'
                    onClick={() => addProduct(+1)}
                    disabled={count === stock ? true : null} style={{ width: "2rem" }}>+</button>
            </div>

            <button className='btnCount'
               
                onClick={() => onAdd(count)}
                disabled={stock === 0 ? true : null}
            >
                 <Link to="" onClick={() => onAdd(count)}  
                   className="btn rounded-bottom addProd" style={{ width: "100%" }}>Añadir a la cesta</Link>

            </button>

        </div>
    )
}

export default ItemCount

//un state es un hook que permite almacenar valores
//el state tiene 2 componentes