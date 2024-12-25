import React, { useEffect, useState } from 'react'
import Ecommerce1Header from '../components/Ecommerce1Header'
import Footer from '../components/Footer'
import Productinwishlist from '../components/productinwishlist'
import BestSellersSection from '../components/BestSellersSection'

export default function Wishlist() {
const [wishlist,setwishlist] = useState([])

useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('items')) || [];
    setwishlist(storedWishlist);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedWishlist = JSON.parse(localStorage.getItem('items')) || [];
      setwishlist(updatedWishlist);
    };

    window.addEventListener('storage', handleStorageChange);


    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className='productpage'>
        <Ecommerce1Header />
        <div className='productpagee'>
            <div className='productpagecontainer'>
                <h1>Your Wishlist items</h1>

        <div className='wishlist'>
            {wishlist.length === 0 && <div>Your wishlist is empty</div>}
{wishlist.map((prrduct,index) => (
    <Productinwishlist productt={prrduct} key={index}/>
))}
        </div>
            </div>
        </div>
        <BestSellersSection />
        <Footer />
    </div>
  )
}
