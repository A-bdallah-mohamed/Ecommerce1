import React from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Ecommerce1 from './Ecommerce1';
import Ecommerce1Account from './Ecommerce1Account';
export default function Ecommerce1Routes() {
  return (
    <div className='Ecommerce1Routes'>
  <Routes>
    <Route path='/' element={<Ecommerce1 />}/>
    <Route path='/MyAccount' element={<Ecommerce1Account />}/>
  </Routes>
  </div>
  )
}
