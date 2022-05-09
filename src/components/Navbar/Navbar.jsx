import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import '../Navbar/Navbar.css'
import { product } from '../Data/data';


function Navbar() {
  const marcas = [];

  for(var i = 0; i < product.length; i++) {
   
    const elemento = product[i].marca;
   
    if (!marcas.includes( product[i].marca)) {
      marcas.push(elemento);
    }
  }
   function elemento(unicos){
   
    return(<li>${unicos}</li>)
   }
  console.log(marcas);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-dark rounded-bottom shadow-lg">
        <div className="container-fluid">
          <div className=' d-flex justify-content-evenly'>
            <div> <img src="https://icones.pro/wp-content/uploads/2021/04/icone-d-ordinateur-violet.png" alt="" width="47" height="37" class="d-inline-block align-text-top" />
            </div>   <div className='mx-0'>                <a className="nav-link active text-white px-1" aria-current="page" href="#">TecStore</a>
            </div></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Principal</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link active">Nuestros Productos</Link>
              </li>
  <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>              <Link to="/productos/laptop" className="dropdown-item">Laptops</Link></li>
                  <li>              <Link to="/productos/computadora-de-escritorio" className="dropdown-item">Computadoras de Escritorio</Link>
                    <li>              <Link to="/productos/accesorio" className="dropdown-item">Accesorios</Link>
                    </li>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marcas
                </a>
     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              { marcas.map(item=>

								<li>	<Link to={`/productos/marca/${item}`} className="dropdown-item">{item}</Link>
                   </li>	 
                    )}
      
         </ul>
              </li>
            </ul>
            <form className="d-flex">

            </form>
            <button id="btnCarrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="px-0">
              <CartWidget />
            </button>


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar