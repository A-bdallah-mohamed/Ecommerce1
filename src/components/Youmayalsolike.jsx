import React,{useEffect, useState} from 'react'
import { Products } from '../database/db'
import Product from './product'
export default function Youmayalsolike({producttt}) {
const [random,setrandom] = useState([])
useEffect(()=> {

const randomfour = Products.sort(() => Math.random() - 0.5).slice(0,4)
setrandom(randomfour)
console.log(randomfour)

},[producttt])
  return (
     <div>
                     <p className='Youmayalsolike'>
                     You may also like
                     </p>
<div className='Ecommerce1-BestSellersProducts'>
{random.map((product,index) => (
    <Product productt={product} key={index}/>
))}
</div>
     </div>
  )
}
