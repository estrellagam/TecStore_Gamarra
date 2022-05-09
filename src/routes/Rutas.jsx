import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer/ItemList'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Main from '../components/ItemListContainer/Main/Main'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/ItemListContainer/Carousel/Carousel'
const Rutas = () => {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route index element={<Main/>}/>
<Route path='/productos' element={<ItemListContainer/>}/>
 <Route path='/item-detail/:id' element={<ItemDetailContainer/>}/>
 <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
 <Route path='/productos/marca/:marca' element={<ItemListContainer/>}/>

</Route>
  </Routes>
</BrowserRouter>


    </>
    
    )
}

export default Rutas