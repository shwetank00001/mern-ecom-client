import axios from 'axios'
 

import { 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL, 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS } from '../constants/productConstants'

export const getProduct = (keyword= "", currentPage= 1, price= [0, 80000])=> async ( dispatch ) => {
    try {

        const {data} = await axios.get(`http://localhost:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lt]=${price[1]}` )
        console.log("The data has been received by the redux:-", data)
        dispatch( { type: ALL_PRODUCT_SUCCESS, payload : data} )
        console.log("working")
    } catch (error) {
        dispatch({type:  ALL_PRODUCT_FAIL, payload: error})
        console.log(error)
    }
}

export const getProductDetails = (id)=> async ( dispatch ) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
    
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
    
        dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data.product,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload: error.response.data.message,
        });
      }
}




export const clearErrors = async ( dispatch ) => {
    dispatch( { type: CLEAR_ERRORS })
}