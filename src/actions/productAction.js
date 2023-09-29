import axios from 'axios'
 

import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS } from '../constants/productConstants'

export const getProduct = ()=> async ( dispatch ) => {

    try {
        dispatch( { type: ALL_PRODUCT_REQUEST } )
        const resp = await axios.get('http://localhost:5000/api/v1/products?page=4' )
        console.log("The data has been received by the redux:-", resp.data)
        dispatch( { type: ALL_PRODUCT_SUCCESS, payload : resp.data} )

    } catch (error) {
        console.log(error)
    }
}


export const clearErrors = async ( dispatch ) => {
    dispatch( { type: CLEAR_ERRORS })
}