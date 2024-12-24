import React from 'react'
import Ecommerce1Header from '../components/Ecommerce1Header'
import Footer from '../components/Footer'
import { useAuth } from '../config/authcontext'
export default function Wishlist() {
    const { currentUser, loading } = useAuth();
  return (
    <div className='productpage'>
        <Ecommerce1Header />
        <div className='productpagee'>
            <div className='productpagecontainer'>
                <h1>Your Wishlist items</h1>

        <div className='Ecommerce1-BestSellersProducts'>

        </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
