import React,{useEffect, useState} from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useAddtofav } from '../Custom hooks/Addtofav';
export default function Product({productt}) {
const [name,setname] = useState('')
const AddtoFavourite = useAddtofav()
useEffect(()=>{

  if(productt.name.length > 22){
    setname(productt.name.slice(0,25) + '...')
   }
   else{
     setname(productt.name)
   }
},[productt.name])
const handleClearStorage = () => {
  localStorage.clear();
  console.log("All localStorage items have been deleted.");
};
  return (
    <div className='Ecommerce1-product'>
      <div>{productt.instock === 0 ? <div className='soldout'>Sold out</div> : productt.instock <= 5 && <div className='soldout'>only {productt.instock} left in stock!</div> }</div>
        <div className='Ecommerce1-ProductImageContainer'>
          <Link to={`/${productt.name.replace(/\s+/g, '-')}`}>
        <img src={productt.image[0]} alt={`${productt.name}`}/>
        </Link>
        </div>
        <div className='producttext'>
        <Link to={`/${productt.name.replace(/\s+/g, '-')}`}>
        <p>{name}</p>
        </Link>
        <span>
          <div className='prices'><div>{productt.price}</div>{productt.previousPrice && <sub className='previousprice'>{productt.previousPrice}</sub>} </div>
          <div className='Ecommerce1-ProductButtons'>
            <div className='ProductButtons' title='Add to Favourite' onClick={()=>AddtoFavourite(productt)}><FaHeart /></div>
            <div className='ProductButtons' title='Add to Cart' onClick={handleClearStorage}><FaPlus /></div>
            </div>
            </span>
            </div>
    </div>
  )
}
