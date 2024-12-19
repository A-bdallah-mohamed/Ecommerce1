import React from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Ecommerce1 from './pages/Ecommerce1';
import Ecommerce1Account from './pages/Ecommerce1Account';
import {Products} from './database/db.jsx'
import Ecommerce1productPage from './pages/Ecommerce1productPage.jsx';
function App() {
  const products = Products
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Ecommerce1 />}/>
    <Route path='/MyAccount' element={<Ecommerce1Account />}/>
    {products.map((product,index) => (
        <Route path={`/${product.name.replace(/\s+/g, '-')}`} element={<Ecommerce1productPage productt={product} />} key={index}/>
    ))}
  </Routes>
  </Router>
  );
}

export default App;
