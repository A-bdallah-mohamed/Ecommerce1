import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Ecommerce1 from './pages/Ecommerce1';
import Createnewaccount from './pages/Createnewaccount.jsx';
import {Products} from './database/db.jsx'
import Ecommerce1productPage from './pages/Ecommerce1productPage.jsx';
import ScrollToTop from './Custom hooks/ScrolltoTop.jsx';
import Ecommerce1CategoryPage from './pages/Ecommerce1CategoryPage.jsx';
import Alreadyhaveanaccount from './pages/Alreadyhaveanaccount.jsx';
import Wishlist from './pages/Wishlist.jsx';
import { AuthProvider } from './config/authcontext.jsx';
import { useLocation } from "react-router-dom";
function App() {


    const [categories,setcategories] = useState([])
    
    useEffect(()=>{
        const categories  = Array.from(new Set(Products.map(p => p.category)))
        setcategories(categories)
        },[])

  return (
    <React.StrictMode>
      <AuthProvider >
    
  
      <ScrollToTop />
    <Routes>
    <Route path='/' element={<Ecommerce1 />}/>
    <Route path='/Create-new-account' element={<Createnewaccount />}/>
    <Route path='/Log-in' element={<Alreadyhaveanaccount />}/>
    <Route path='/WishList' element={<Wishlist />}/>
    {Products.map((product,index) => (
        <Route path={`/${product.name.replace(/\s+/g, '-')}`} element={<Ecommerce1productPage productt={product} />} key={index}/>
    ))}
        {categories.map((categorie,index) => (
        <Route path={`/${categorie.replace(/\s+/g, '-')}`} element={<Ecommerce1CategoryPage categorie={categorie} />} key={index}/>
    ))}
  </Routes>

  </AuthProvider >
  </React.StrictMode>
  );
}

export default App;
