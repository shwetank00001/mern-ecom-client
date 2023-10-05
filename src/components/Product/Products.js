import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Home/Product';
import Loader from '../layout/loader/Loader';
import { getProduct } from '../../actions/productAction';
import './Products.css';
import { useParams } from 'react-router-dom'
import Pagination from "react-js-pagination"

const Products = () => {
    const dispatch = useDispatch();
    
    const [ currentPage, setCurrentPage ] = React.useState(1)

    const { products, loading, error, productsCount, resultPerPage} = useSelector((state) => state.products);

    const { keyword  } = useParams();

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }
    React.useEffect(() => {
        if (keyword) {
            dispatch(getProduct(keyword, currentPage));
        }
    }, [dispatch, keyword, currentPage]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <h2 className='productHeading'>Products :-</h2>
                    <div className='products'>
                        {products &&
                            products.map((product) => (
                                <Product key={product._id} product={product} />
                            ))}
                    </div>

                    <div className='paginationbox'>
                        <Pagination 
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText={"Next"}
                            prevPageText={"Previous"}
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass='page-item'
                            linkClass='page-link'
                            activeClass='pageItemActive'
                            activeLinkClass='pageLinkActive'
                            />
                        
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Products;
