import React from 'react'
import ProductCard from './ProductCard'
import "../ProductList/productlist.css"

const ProductList = () => {
  return (
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  list " >
<h1 className="mx-5 mb-5 text-center my-5 py-3">PRODUCTOS DESTACADOS </h1>
<div className="row d-flex justify-content-evenly mx-5 pt-1 mt-4">
<ProductCard/>
<ProductCard/> <ProductCard/><ProductCard/><ProductCard/><ProductCard/>
</div>
</div>
  )
}

export default ProductList