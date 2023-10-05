import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Home/Product'
import Loader from '../layout/loader/Loader'
import { getProduct } from '../../actions/productAction'
import './Products.css'

const Products = () => {

    const dispatch = useDispatch()

    const { products, loading ,error, productsCount } = useSelector( (state) => state.products)

    React.useEffect( ( ) => {
        dispatch(getProduct())
    }, [dispatch])
    
  return (
    <Fragment>
        {
            loading  ?  <Loader /> 
            :
            <Fragment>
                <h2 className='productHeading'>Products</h2>
                <div className='products'>
                    {
                        products && products.map( (product) => (
                            <Product key={product._id} product = {product} />
                        ))
                    }

                </div>
            </Fragment>
        }
    </Fragment>
  )
}

export default Products