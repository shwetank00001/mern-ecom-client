import axios from 'axios'
 

import { 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL, 
    ALL_PRODUCT_DETAILS_REQUEST,
    ALL_PRODUCT_DETAILS_SUCCESS,
    ALL_PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS } from '../constants/productConstants'

export const getProduct = ()=> async ( dispatch ) => {
    try {

        const {data} = await axios.get('http://localhost:5000/api/v1/products' )
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
        const {data} = await axios.get(`http://localhost:5000/api/v1/product/${id}` )

        console.log("The single has been received by the redux:-", data)
        dispatch( { type: "ALL_PRODUCT_SUCCESS", payload : data.product } )
        console.log("working")
    } catch (error) {
        dispatch({type:  ALL_PRODUCT_FAIL, payload: error})
        console.log(error)
    }
}




export const clearErrors = async ( dispatch ) => {
    dispatch( { type: CLEAR_ERRORS })
}