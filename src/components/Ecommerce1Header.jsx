import React from 'react'
import Logo from '../assets/logo_placeholder.jpg'
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { Link } from 'react-router-dom';
export default function Ecommerce1Header() {
  return (
    <header>
    <img src={Logo} alt='Logo-PlaceHolder'/>
    <ul>
        <div className='Ecommerce1-input'>

    <input placeholder='Search'/>
    <div className='Ecommerce1-SearchButton'><CiSearch /></div>
    </div>
        <li>Home</li>
        <li>Shop</li>
        <li>Collection</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className='Ecommerce1-Account'>

    <Link to='/MyAccount'><VscAccount className='Ecommerce1-Icon' title='My Account'/></Link>
        <CiHeart className='Ecommerce1-Icon' style={{fontSize:'35px'}} title='Wishlist'/>
        <div className='Ecommerce1-Cart'>
            <SlBag className='Ecommerce1-Icon' title='Cart'/>
        </div>
    </div>
</header>
  )
}
