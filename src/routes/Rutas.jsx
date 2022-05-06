import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer/ItemList'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Rutas = () => {
  return (
    <>
<BrowserRouter>
<Routes>
    <Route index element={<ItemListContainer/>}/>
    <Route path='/item-detail/:id' element={<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>


    </>
    
    )
}

export default Rutas