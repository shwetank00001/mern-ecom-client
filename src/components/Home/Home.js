import { Fragment } from "react"
import React from 'react'

import './home.css'
import Product from './Product.js'
import MetaData from "../layout/MetaData"


const Home = () => {

  const product = {
    name: "Black",
    price: 500,
    _id: "shwetank"
  }
  return (
    <Fragment>
      <MetaData title="Shwetank's Ecommerce" />
        <div className='banner'>
            <p>Welcome to The Shop</p>
            <h3>Products listed are</h3>

            <a href="container"> 
            <button>
                Scroll
            </button>
            </a>
        </div>

        <h2 className="homeHeading"> All Products   </h2>


        <div className="container" id="container">

          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />

        </div>
    </Fragment>

  )
}

export default Home