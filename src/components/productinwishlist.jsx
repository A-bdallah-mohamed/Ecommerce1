import React from 'react'
import { MdCancel } from "react-icons/md";
import useScrollToTop from '../Custom hooks/ScrolltoTop';
import { Link } from 'react-router-dom';
export default function Productinwishlist({productt}) {
    const scrollToTop = useScrollToTop();
      const removeFromLocalStorage = (productToRemove)=> {
        const existingArray = JSON.parse(localStorage.getItem('items')) || [];
        const updatedArray = existingArray.filter(product => product.name !== productToRemove.name);
        localStorage.setItem('items', JSON.stringify(updatedArray));
        window.location.reload() 
        scrollToTop()
    }
  return (
    <div className='productinwishlist'>
        <div className='productinwishlistdetails'>
        <Link to={`/${productt.name.replace(/\s+/g, '-')}`} className='productinwishlistdetails'>
<img src={productt.image[0]} alt={`${productt.name}`}/>
</Link>
<div className='productinwishlistdetailsnamenprice'>
<div>{productt.name}</div>
<div>{productt.price}</div>
</div>
</div>
<div className='addtocardbtninwishlist'>add to cart</div>
<MdCancel title='Remove from wishlist' style={{cursor:'pointer'}} onClick={()=>removeFromLocalStorage(productt)}/>
    </div>
  )
}
