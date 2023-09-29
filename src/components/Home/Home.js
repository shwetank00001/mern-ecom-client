import { Fragment } from "react"
import React from 'react'

import './home.css'
import Product from './Product.js'
import MetaData from "../layout/MetaData"

import { getProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
 

const Home = () => {

  const dispatch = useDispatch()
  const {loading, products, error, productsCount} = useSelector( state => state.products)

  React.useEffect( () => {
    dispatch(getProduct())
  }, [dispatch] )


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
          { products && products.map((product) => <Product product={product} />)}
        </div>
    </Fragment>

  )
}

export default Home