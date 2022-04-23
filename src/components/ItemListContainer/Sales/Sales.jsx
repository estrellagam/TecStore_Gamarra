import React from 'react'
import ImgSale1 from '../../../assets/cyber3.jpg'
import ImgSale2 from '../../../assets/cyber.jpg'
import CardSale from './CardSale'
import './cardSales.css'
const Sales = () => {
  return (
    <div className='pt-5'>
<h1 className='text-center title'>
¡Ofertas del momento!</h1>
<div className="sales d-flex justify-content-evenly pt-4 flex-wrap">
<CardSale
img={ImgSale1}
id={"1"}
marca={"HP"}
/>
<CardSale
img={ImgSale2}
id={"1"}
marca={"ACER"}/>
</div>
</div>


   
  )
}

export default Sales