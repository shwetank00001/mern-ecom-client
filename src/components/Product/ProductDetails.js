import React, { Fragment } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'

import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

import Loader from '../layout/loader/Loader'


import ReviewCard from './ReviewCard'

 
const ProductDetails = () => {
  const dispatch = useDispatch()  
  const { product, loading, error } = useSelector(state => state.productDetails) 
  let { id } = useParams();

  React.useEffect(() => {
    dispatch(getProductDetails(id))
    console.log(id)
  }, [dispatch, id])

  if (loading) {
    return <div>Loading...</div>;
  }

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };


  return (
    <Fragment>
      { loading ? <Loader /> :
          <Fragment>    
          test 123
          <div className='ProductDetails'>
            <div>
              <Carousel>
                {product && product.images && 
                  product.images.map((item, i) => (
                    <img 
                    className='CarouselImage'
                      key={item._id}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))
                }
              </Carousel>
            </div>
    
            <div>
              <div className='detailsBlock-1'>
                <h4>{product.name}</h4>
                <p>Product # {product._id}</p>
              </div>
    
              <div className='detailsBlock-2'>
                <ReactStars {...options}/>
                <span>({product.numOfReviews} {' '} Reviews)</span>
              </div>
    
              <div className='detailsBlock-3'>
                <h1>{`Rs.${product.price}`}</h1>
                <div className='detailsBlock-3-1'>
                  <div className='detailsBlock-3-1-1'>
                    <button>-</button>
                    <input value={1} type= "number" />
                    <button>+</button>
                  </div> {" "}
                  <button>Add to Cart</button>
                </div>
    
                <p>
                  Status:{" "}
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "Out Of Stock" : "In Stock"}
                  </b>
                </p>
              </div>
    
              <div className='detailsBlock-4'>
                Description : <p>{product.description}</p>
              </div>
    
              <button className='submitReview'>Submit Review</button>
            </div>
          </div>
    
          <h3 className='reviewsHeading'>REVIEWS</h3>
          {
            product.reviews && product.reviews[0] ? (
              <div className='reviews'> 
              {
                product.reviews  && product.reviews.map( (review) => <ReviewCard review ={review} />)
              }
              </div>
            ) : (
              <p className='noReviews'>No Reviews Yet</p>
            )
          }
        </Fragment> } 
    </Fragment>
  )
}


export default ProductDetails