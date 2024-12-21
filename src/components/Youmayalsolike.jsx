import React,{useEffect, useState} from 'react'
import { Products } from '../database/db'
import Product from './product'
import { useSearchParams } from 'react-router-dom'

export default function Youmayalsolike({Category}) {
const [similarproducts,setsimilarproducts] = useState([])
useEffect(()=> {
const array = Products.filter(p => p.category === Category)
const randomfour = array.sort(() => Math.random() - 0.5).slice(0,4)
setsimilarproducts(randomfour)
},[Category])
  return (
     <div>
                     <p className='Youmayalsolike'>
                     You may also like
                     </p>
<div className='Ecommerce1-BestSellersProducts'>
{similarproducts.map((product,index) => (
    <Product productt={product} key={index}/>
))}
</div>
     </div>
  )
}
