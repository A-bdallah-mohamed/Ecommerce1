import React from 'react'
import Ecommerce1Header from '../components/Ecommerce1Header'
import Footer from '../components/Footer'
import Button from '../components/Button';
export default function Ecommerce1productPage({productt}) {
  return (
    <>
    <Ecommerce1Header />
    <div className='productpagecontainer'>
        <div className='productimagescontainer'>
<img  src={productt.image[0]}/>
        </div>
        <div className='productdetailscontainer'>
            <h4>{productt.name}</h4>
            <div className='productpricecontainer'><h3>{productt.price}</h3>{productt.previousPrice && <h3 style={{textDecoration:'line-through',fontSize:'18px'}}>{productt.previousPrice}</h3>}</div>
            <p>{productt.describtion}</p>
            <div className='productpagebuttons'><Button animation={false} text={'ADD TO CART'}/></div>
        </div>

    </div>
    <Footer />
    </>
  )
}
