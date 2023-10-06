import { Fragment } from "react"
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import './Home.css'
import Product from './Product.js'
import MetaData from "../layout/MetaData"

import { getProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
 

const Home = () => {

  const dispatch = useDispatch()
  const {loading, products, error} = useSelector( (state) => state.products)

  React.useEffect( () => {
    dispatch(getProduct())  
    console.log({"Home JS" : products})
  }, [dispatch] )



  return (

    <div>
    {
      loading ? 
      (<ClipLoader /> )
      :     
      (<Fragment>
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

        <h2 className="homeHeading"> Featured Products are:-   </h2>


        <div className="container" id="container">

          { products && products.map((item) => 
          (
            <Product product={item} />)
          )}

        </div>
      </Fragment>)
    }

    </div>
  )
}

export default Home