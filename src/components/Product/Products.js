import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Home/Product';
import Loader from '../layout/loader/Loader';
import { getProduct } from '../../actions/productAction';
import './Products.css';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import { Typography, Slider} from '@mui/material';

const categories = ["Laptop", "Footwear", "Bottom", "Tops", "Attire", "Camera", "SmartPhones"]

const Products = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = React.useState(1);
    const [price, setPrice] = React.useState([0, 25000]);
    const [category, setCategory] = React.useState("")

    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);

    const { keyword } = useParams();

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };


    useEffect( () => {
        if (keyword) {
            dispatch(getProduct(keyword, currentPage, price, category));
        }
    }, [dispatch, keyword, currentPage, price]);

    let count = filteredProductsCount

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
      };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <h2 className='productsHeading'>Products</h2>
                    <div className='products'>
                        {products &&
                            products.map((product) => (
                                <Product key={product._id} product={product} />
                            ))}
                    </div>

                    <div className='filterBox'>
                    <Typography>Price</Typography>
                        <Slider
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={25000}
                        />
                    <Typography>Categories</Typography>
                    <ul className='categoryBox'>
                        {
                            categories.map( (item) => (
                                <li 
                                className='category-link'
                                key={item.id}
                                onClick={ () => setCategory(item)} 
                                >
                                    {item}
                                </li>
                            ) )
                        }
                    </ul>


                    </div>

                    {resultPerPage < count && (
                        <div className='paginationbox'>
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText='>'
                                prevPageText='<'
                                firstPageText='<<'
                                lastPageText='>>'
                                itemClass='page-item'
                                linkClass='page-link'
                                activeClass='pageItemActive'
                                activeLinkClass='pageLinkActive'
                            />
                        </div>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default Products;
