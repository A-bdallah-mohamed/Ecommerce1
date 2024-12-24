import React,{useState} from 'react'
import Ecommerce1Header from '../components/Ecommerce1Header'
import Footer from '../components/Footer'
import { CiHeart } from "react-icons/ci";
import Youmayalsolike from '../components/Youmayalsolike';
export default function Ecommerce1productPage({productt}) {
    const [imageindex,setimageindex] = useState(0)
    const Setindex = (index) => {
        setimageindex(index)
    }
const [quantity,setquantity] = useState(1)
const increasequantity = () => {
    if(quantity < 12 && quantity !== productt.instock){
        setquantity(q => q+1)
    }
}
const decreasequantity = () => {
    if(quantity > 1){
        setquantity(q => q-1)
    }
}
  return (
    <div className='productpage'>
    <Ecommerce1Header />
    <div className='productpagee'>
    <div className='productpagecontainer'>
        <div className='productcontainer'>
        <div className='productimagescontainer'>
<img  src={productt.image[imageindex]} alt={`${productt.name}`} />
<div className='imageselector'>
    {productt.image.map((image,index)=> (
        <img  src={image} key={index} className='imageselectorimages' onClick={()=>Setindex(index)} alt={`${productt.name}`} />
    ))}
</div>
        </div>
        <div className='productdetailscontainer'>
            <h4>{productt.name}</h4>
            <div className='productpricecontainer'><h3>{productt.price}</h3>{productt.previousPrice && <h3 style={{textDecoration:'line-through',fontSize:'18px'}}>{productt.previousPrice}</h3>}</div>
            <p>{productt.description}</p>
            <div className='productpagebuttons'>
                <div className='quantitiySelector'>
                    <span onClick={decreasequantity} style={{ cursor: quantity===1 && 'not-allowed'}}>-</span>
                    <p>{quantity}</p>
                    <span onClick={increasequantity} style={{ cursor: productt.instock === 0 ? 'not-allowed' : quantity === productt.instock ? 'not-allowed' : quantity===12 && 'not-allowed'}}>+</span>
                </div>
                <button className='BUTTON' disabled={productt.instock===0} style={{ cursor: productt.instock === 0 && 'not-allowed'}} onClick={()=>console.log('add to cart clicked')}>ADD TO CART</button>
                <div className='favbutton' title='Add to Favorite '><CiHeart /></div>
                </div>
                {productt.instock === 0 ? <div className='soldoutproductpage'>Sold out</div> : productt.instock <= 5 && <div className='soldoutproductpage'>only {productt.instock} left in stock</div>}
        </div>
        </div>
        <Youmayalsolike Category={productt.category}/>
    </div>

    </div>

    <Footer />
    </div>
  )
}
