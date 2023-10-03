import React from 'react'
import Header from './components/layout/Header/Header'
// import WebFont, { load } from 'webfontloader'
import Footer from './components/layout/Footer/Footer'

import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/Product/ProductDetails.js'

// files import
import Home from './components/Home/Home'


// React.useEffect( () => {
//   WebFont.load()
// }, [])
const App = () => {
  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>   
      <Footer />
    
    </div>

  )
}

export default App