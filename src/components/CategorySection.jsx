import React,{useEffect,useState} from 'react'
import hoodieCategorie from '../assets/Hoodies.jpg'
import { Products } from '../database/db'
import { Link } from 'react-router-dom'
export default function CategorySection() {
      const [categories,setcategories] = useState([])
      
      useEffect(()=>{
          const categories  = Array.from(new Set(Products.map(p => p.category)))
          setcategories(categories)
          },[Products])
  
  return (
<div >
<div className='Ecommerce1-Bestsellers'>
                Categories
            </div>
            <div className='Ecommerce1-CategoriesSection'>
    {categories.map((categorie,index) => (
      <Link to={`/${categorie.replace(/\s+/g, '-')}`} >
  <div className='Ecommerce1-CategorieCard' key={index}>
  <div className='Ecommerce1-CategorieCardImage' style={{backgroundImage:`url(${hoodieCategorie})`}} />
  <div className='Ecommerce1-CategorieCardText'>
      <p>{categorie}</p>
  </div>
</div>
</Link >
    ))}
  </div>
</div>
  )
}
