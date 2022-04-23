import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Content from '../Content/Content'
import ImgSlide2 from '../../../assets/slide2.jpg'
import ImgSlide3 from '../../../assets/slide3.jpg'

const Carousel = () => {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://crehana-blog.imgix.net/media/filer_public/d4/f6/d4f670cd-6a7d-43a1-b422-19c415541deb/fondo-pantalla.jpg" className="d-block w-100 imagen" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
           <h1>EQUIPOS DE ÚLTIMA GENERACIÓN</h1>
        <Content/>
        </div>
      </div>
      <div className="carousel-item">
        <img src={ImgSlide2} className="d-block w-100 imagen" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h1>ACCESORIOS</h1>
          <p>Complementa tus equipos con los mejores accesorios de cómputo. </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={ImgSlide3} className="d-block w-100 imagen" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h1>ORDENADORES</h1>
          <p>Encuentra los mejores equipos en diferentes modelos de acuerdo a tus necesidades.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Carousel