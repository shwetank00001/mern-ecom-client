import { ALL_ORDER_REQUEST, ALL_ORDER_SUCCESS, ALL_ORDER_FAIL } from '../constants/orderConstants'

export const  userReducer = ( state = { orders : [ ] }, action) => {
    switch(action.type){
        case ALL_ORDER_REQUEST:
            return {
                loading : true, 
                orders : []
            }
        case ALL_ORDER_SUCCESS:
            return {
                loading : true, 
                orders : [],
                orderCounts : action.payload.orderCounts
            }
        case ALL_ORDER_FAIL:
            return {
                loading : true, 
                error  : action.payload
            }
    }
}