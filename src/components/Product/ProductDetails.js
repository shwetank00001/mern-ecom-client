import React, { Fragment } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'

import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom';

 
const ProductDetails = ( { match }) => {


    const dispatch = useDispatch()
    let { id } = useParams();
    const {product ,loading, error }  = useSelector(state => state.productDetails)
    



    React.useEffect( () => {
        dispatch(getProductDetails(id))
    }, [dispatch, id] )

  return (
    <Fragment>
        <div className='ProductDetails'>
            <div>
                <Carousel>
                    {product.images && 
                        product.images.map( (item, i) => (
                            <img 
                            className='CarouselImage'
                            key={item.url}
                            src={item.url}
                            alt={`${i} Slide`}
                              />
                        ))
                    }
                </Carousel>
            </div>


            <div>
                <div className='detailsBlock-1'>
                    <h2>{product.name}</h2>
                    <p>Product # {product._id}</p>
                </div>

                <div>
                    <span>({product.numOfReviews} Reviews)</span>
                </div>
            </div>

        </div>
    </Fragment>
  )
}

export default ProductDetails