import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../Navbar/Navbar.css'


function Navbar() {
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
                <a className="nav-link active" aria-current="page" href="#">Principal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Nosotros</a>
              </li>
              <li className="nav-item active dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Ordenadores</a></li>
                  <li><a className="dropdown-item" href="#">Periféricos</a></li>
                  <li><a className="dropdown-item" href="#">Accesorios</a></li>

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