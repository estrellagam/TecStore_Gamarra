import React from 'react'
import ImgSale1 from '../../../assets/cyber3.jpg'
import ImgSale2 from '../../../assets/cyber.jpg'
import './cardSales.css'

const CardSale = ({img,cod,marca}) => {
  return (
    <div className='saleCard'>
    <div className="imgSale">
 <img src={img} alt=""/>
    </div>
    <div className="saleContent d-flex justify-content-evenly pt-3 bg-light rounded shadow-sm py-3">
  <div className="saleText">
  <h4 className='py-2 marca'> {marca}</h4>   
      
      </div>
 <div className="saleButton">
 <button type="button" class="btn" id={cod}>Ver todos</button>
 
 
 </div>
    </div>
 </div>
  )
}
export default CardSale