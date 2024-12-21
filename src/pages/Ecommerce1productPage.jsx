import React,{useEffect, useState} from 'react'
import Ecommerce1Header from '../components/Ecommerce1Header'
import Footer from '../components/Footer'
import Button from '../components/Button';
import { CiHeart } from "react-icons/ci";
import Youmayalsolike from '../components/Youmayalsolike';
export default function Ecommerce1productPage({productt}) {
    const [imageindex,setimageindex] = useState(0)
    const Setindex = (index) => {
        setimageindex(index)
    }

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
