import React, { Fragment, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import your custom CSS for styling
import Loader from '../layout/Loader/Loader';
import ReviewCard from './ReviewCard';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetails);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    const options = {
        value: product?.ratings || 0, 
        readOnly: true,
        precision: 0.5,
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    {error ? (
                        <div className='error-message'>Error: {error.message}</div>
                    ) : (
                        <div className='product-details-container'>
                            <div className='product-image-carousel'>
                                <Carousel>
                                    {product?.images &&
                                        product.images.map((item, i) => (
                                            <img
                                                className='product-image'
                                                key={item._id || i}
                                                src={item.url || '/default-image.jpg'}
                                                alt={`${i} Slide`}
                                            />
                                        ))}
                                </Carousel>
                            </div>
                            <div className='product-info'>
                                <h4 className='product-name'>{product?.name || 'Example Product Name'}</h4>
                                <p className='product-price'>Price: Rs.{product?.price || '100.00'}</p>
                                <p className='product-id'>Product ID: {product?._id || '12345'}</p>
                                <p className='product-description'>
                                    Description: {product?.description || 'This is a sample product description.'}
                                </p>
                                <ReactStars {...options} className='product-ratings' />
                                <span className='product-review-count'>({product?.numOfReviews || 0} Reviews)</span>
                                <p className={`product-stock ${product?.Stock < 1 ? 'out-of-stock' : 'in-stock'}`}>
                                    {product?.Stock < 1 ? 'Out of Stock' : 'In Stock'}
                                </p>
                                <div className='product-actions'>
                                    <button className='product-decrement-button'>-</button>
                                    <input className='product-quantity-input' value={1} type='number' />
                                    <button className='product-increment-button'>+</button>
                                    <button className='product-add-to-cart-button'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {product && product.reviews && product.reviews[0] ? (
                        <div className="reviews">
                            {product.reviews.map((review) => (
                                <ReviewCard key={review._id} review={review} />
                            ))}
                        </div>
                    ) : (
                        <p className="noReviews">No Reviews Yet</p>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ProductDetails;
