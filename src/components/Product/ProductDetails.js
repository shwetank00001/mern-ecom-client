import React, { Fragment } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import { match } from 'assert'
 
const ProductDetails = (match) => {

    const dispatch = useDispatch()

    const {product ,loading, error }  = useSelector(state => state.productDetails)

    React.useEffect( () => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch, match.params.id] )
  return (
    <Fragment>
        <div className='ProductDetails'>
            <div>
                <Carousel>
                    {product.images && 
                        product.images.map( (item, index) => (
                            <img 
                            className='CarouselImage'
                            key={item.url}
                            src={item.url}
                            alt={`${index} Slide`}
                              />
                        ))
                    }
                </Carousel>
            </div>

        </div>
    </Fragment>
  )
}

export default ProductDetails