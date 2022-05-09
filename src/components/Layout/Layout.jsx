import React from 'react'
import Navbar from '../Navbar/Navbar'
import Principal from '../ItemListContainer/Main/Main'
import Rutas from '../../routes/Rutas'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
  </>
  )
}

export default Layout