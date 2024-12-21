import React, { useState } from 'react'
import { Products } from '../database/db'
export default function Ecommerce1CategoryPage() {
    const [categories,setcategories] = useState([])
    
    useEffect(()=>{
        const categories  = Array.from(new Set(Products.map(p => p.category)))
        setcategories(categories)
        },[Products])

  return (
  <div className='productpage'>
      <Ecommerce1Header />
      <div className='productpagee'>
      <div className='productpagecontainer'>
          <div className='productcontainer'>
          <div className='productimagescontainer'>
  <img  src={productt.image[imageindex]} />
  <div className='imageselector'>
      {productt.image.map((image,index)=> (
          <img  src={image} key={index} className='imageselectorimages' onClick={()=>Setindex(index)}/>
      ))}
  </div>
          </div>
          <div className='productdetailscontainer'>
              <h4>{productt.name}</h4>
              <div className='productpricecontainer'><h3>{productt.price}</h3>{productt.previousPrice && <h3 style={{textDecoration:'line-through',fontSize:'18px'}}>{productt.previousPrice}</h3>}</div>
              <p>{productt.description}</p>
              <div className='productpagebuttons'>
                  <div className='quantitiySelector'>
                      <span>-</span>
                      <p>1</p>
                      <span>+</span>
                  </div>
                  <Button animation={false} text={'ADD TO CART'}/>
                  <div className='favbutton' title='Add to Favorite '><CiHeart /></div>
                  </div>
          </div>
          </div>
          <Youmayalsolike Category={productt.category}/>
      </div>
  
      </div>
  
      <Footer />
      </div>
  )
}
