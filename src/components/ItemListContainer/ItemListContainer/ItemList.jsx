import React from 'react'
import ProductCard from './Item' 
import "./productlist.css"
import { useEffect, useState } from "react";

const ProductList = () => {
const[products,setProducts]=useState([])

const product=[
  {
    nombre:"LAPTOP IDEAPAD 5",
    marca:"LENOVO",
    stock:2,
    img:"https://www.lenovo.com/medias/lenovo-laptops-ideapad-5-14-amd-hero.png?context=bWFzdGVyfHJvb3R8MjI2NTExfGltYWdlL3BuZ3xoNDQvaGU1LzE0Mjc4MDE2NTY1Mjc4LnBuZ3w0Y2Q0MDk5NzA1MTU4OWQ1NjMwMjc0MmUwMDkzYTRkMGFiMjUxYmEyN2M0ZGQwNTE3ZmY0MDM2MzJhYjZlNTli"
 ,precio:2420.85},{
    nombre:"LAPTOP HP 15-EF1009LA",
    marca:"HP",
    stock:4,
    img:"https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/1/612B6LA-1_T1648151376.png"
,precio:3120.85
  },
  {
    nombre:"LAPTOP ZENBOOK 13",
    marca:"ASUS",
    stock:4,
    img:"https://dlcdnwebimgs.asus.com/gain/2f5b0c11-ffdd-4e85-b26d-5c675b719511/"
,precio:6444.88
  }, {
    nombre:"LAPTOP GAMER MSI MODERN",
    marca:"MSI",
    stock:11,
    img:"https://asset.msi.com/resize/image/global/product/product_4_20190830052507_5d68b333d57ef.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
,precio:4120.85
  },
  {
    nombre:"MACBOOK AIR",
    marca:"APPLE",
    stock:11,
    img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"
,precio:4620.85
  }, {
    nombre:"LAPTOP HONOR MAGICBOOK",
    marca:"APPLE",
    stock:2,
    img:"https://home.ripley.com.pe/Attachment/WOP_5/2004274149562/2004274149562_2.jpg"
,precio:1920.85
  }, {
    nombre:"LAPTOP HUAWEI MateBook D 15",
    marca:"HUAWEI",
    stock:2,
    img:"https://img01.huaweifile.com/sg/ms/pe/pms/uomcdn/PE_HW_B2C/pms/202202/gbom/6901443434763/800_800_F8862DE6E9699A9AC13A464E48BF483Bmp.png"
,precio:2920.99
  }, {
    nombre:"LAPTOP ASUS ZENBOOK FLIP",
    marca:"ASUS",
    stock:6,
    img:"https://home.ripley.com.pe/Attachment/WOP_5/2004268851068/2004268851068-2.jpg"
,precio:5520.99
  }
]
 
useEffect(() => {
  const pedido = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 5000);
  });

  pedido
    .then(
      (res) => {
        setProducts(res);
      },
      (err) => {
        console.log("error", err);
      }
    )
    .then(() => console.log(products)) // playStation
    .catch((err) => console.log(err));

  console.log(products); // []

  return () => {};
}, []);


  return (
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  list " >
<h1 className="mx-5 mb-5 text-center my-5 py-3">PRODUCTOS DESTACADOS </h1>
<div className="row d-flex justify-content-evenly mx-5 pt-1 mt-4">

<ProductCard products={products}/>

</div>
</div>
  )
}

export default ProductList