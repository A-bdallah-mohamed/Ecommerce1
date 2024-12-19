import React, { useEffect, useState } from 'react'
import Product from './product';
import { Products } from '../database/db.jsx';
export default function BestSellersSection() {
    const [Bestsellers,setBestsellers] = useState([])
    useEffect(()=>{
        setBestsellers( Object.values(Products).filter(
            (product) => product.frontpage === true
        ))
    },[Products])
  return (
    <div>
                    <div className='Ecommerce1-Bestsellers'>
                        Best Sellers
                    </div>
                    <div className='Ecommerce1-BestSellersProducts'>
                        {Bestsellers.map((product,index)=> (
                            <Product productt={product} key={index}/>
                        ))}
                    </div>
    </div>
  )
}
