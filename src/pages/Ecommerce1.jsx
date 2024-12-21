import React,{useEffect, useRef} from 'react'
import './Ecommerce1.css'
import model from '../assets/model.png'
import useIntersection from '../Custom hooks/UseIntersection';
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CategorySection from '../components/CategorySection';
import BestSellersSection from '../components/BestSellersSection';
import Ecommerce1Header from '../components/Ecommerce1Header';
import Button from '../components/Button';
import { Products } from '../database/db';
export default function Ecommerce1() {
    const [text1 , istext1inview] = useIntersection(true)
    const [text2 , istext2inview] = useIntersection(true)
    const [img1 , isimg1inview] = useIntersection(true)

    // Add categories before the best sellers section          ---------- Important

    //pages are 
    //all products page => header + all products displayed with a filter + footer 
    //cart menu popping up every where but with a view cart button drags you to cart page 
    // cart page => header + in cart products + footer
    // sold out and prev price on product card ui 
    
  return (
    <div className='Ecommerce1-container'>

      <Ecommerce1Header />

        <div className='Ecommerce1-MainSection'>
            <div className='Ecommerce1-MainSectionText'>
                <h3 ref={text1} className={`${istext1inview ? 'Ecommerce1-text1inview' : 'Ecommerce1-text1'}`}>Smart Products</h3>
                <h1 ref={text2} className={`${istext2inview ? 'Ecommerce1-text2inview' : 'Ecommerce1-text2'}`}>Summer offer <br/> 2025 Collection</h1>
               <Button animation={true} text={'Shop now'}/>
            </div>
<img src={model} ref={img1} className={`${isimg1inview ? 'Ecommerce1-img1inview' : 'Ecommerce1-img1'}`}/>
        </div>
        <div className='Ecommerce1-Nonmainsections'>
        <div className='Ecommerce1-Features'>
 
                <div className='Ecommerce1-Feature'>
                <FaShippingFast className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Free Shipping</h4>
    <h6>Free shipping on all order</h6>
</div>
                </div>

                <div className='Ecommerce1-Feature'>
                <Ri24HoursFill className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Support 24/7</h4>
    <h6>Free shipping on all order</h6>
</div>
                </div>

                <div className='Ecommerce1-Feature'>
                <GiTakeMyMoney className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Money Return</h4>
    <h6>Free shipping on all order</h6>
</div>
                </div>

                <div className='Ecommerce1-Feature'>
                <BiSolidOffer className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Order Discount</h4>
    <h6>Free shipping on all order

</h6>
</div>
                </div>
            </div>
            <CategorySection categories={4}/>
<BestSellersSection />

    
        </div>

        <Footer />
    </div>
  )
}
