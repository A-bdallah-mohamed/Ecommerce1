import React, { useState,useEffect } from 'react'
import { Products } from '../database/db'
import Ecommerce1Header from '../components/Ecommerce1Header'
import Footer from '../components/Footer'
import Product from '../components/product'
export default function Ecommerce1CategoryPage({categorie}) {

    const [categories,setcategories] = useState([])

    useEffect(()=>{
        const categories = Products.filter(p=> p.category === categorie)
        setcategories(categories)
        },[categorie])


  return (
    <div className='productpage'>
<Ecommerce1Header />
<div className='productpagee'>
    <div className='productpagecontainer'>
        <h1>{categorie}</h1>
<div className='Ecommerce1-BestSellersProducts'>
{categories.map((product,index) => (
    <Product productt={product} key={index}/>
))}
</div>
    </div>
</div>
<Footer />
</div>
  )
}
