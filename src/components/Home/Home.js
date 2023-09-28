import { Fragment } from "react"
import React from 'react'

import './home.css'

const Home = () => {
  return (
    <Fragment>
        <div className='banner'>
            <p>Welcome to The Shop</p>
            <h3>Products listed are</h3>

            <a href="container"> 
            <button>
                Scroll
            </button>
            </a>
        </div>
    </Fragment>

  )
}

export default Home