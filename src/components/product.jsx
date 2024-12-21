import React,{useEffect, useState} from 'react'
import product from '../assets/product.png'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Product({productt}) {
const [name,setname] = useState('')
useEffect(()=>{
  if(productt.name.length > 22){
    setname(productt.name.slice(0,25) + '...')
   }
   else{
     setname(productt.name)
   }
},[productt.name])

  return (
    <div className='Ecommerce1-product'>
        <div className='Ecommerce1-ProductImageContainer'>
          <Link to={`/${productt.name.replace(/\s+/g, '-')}`}>
        <img src={productt.image[0]}/>
        </Link>
        </div>
        <div className='producttext'>
        <Link to={`/${productt.name.replace(/\s+/g, '-')}`}>
        <p>{name}</p>
        </Link>
        <span>{productt.price} 
          <div className='Ecommerce1-ProductButtons'>
            <div className='ProductButtons' title='Add to Favourite'><FaHeart /></div>
            <div className='ProductButtons' title='Add to Cart'><FaPlus /></div>
            </div>
            </span>
            </div>
    </div>
  )
}
