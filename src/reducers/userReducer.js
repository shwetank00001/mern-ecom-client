import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS } from '../constants/userContants'


export const userReducer = ( state = { user : {} }, action ) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                loading : true,
                isAuthenticated : false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                message: "User Logged In",
                loading : true,
                isAuthenticated : true,
                user : action.payload 
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated : false,
                user : null,
                error: action.payload
            }

            case CLEAR_ERRORS:
                return{
                    ...state,
                    error : null
                }
            default :
            return state
    }
}