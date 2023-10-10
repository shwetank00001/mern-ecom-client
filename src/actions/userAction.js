import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  CLEAR_ERRORS, 
  REGISTER_USER_REQUEST, 
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL } from '../constants/userContants'

import axios from 'axios'


//login
export const login = (email, password) => async (dispatch) =>{

    try {
        dispatch( { type: LOGIN_REQUEST });
        
        const config = { headers: { "Content-Type": "application/json" }}

        const { data } = await axios.post(
            `http://localhost:5000/api/v1/login`, 
            {email, password}, 
            config
            )

        dispatch({type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error })
    }
}

// register- need to fix image
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`http://localhost:5000/api/v1/register`, userData, config);
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

  // Load user
export const loadUser = () => async (dispatch) =>{

    try {

        dispatch( { type: LOAD_USER_REQUEST });
        const { data } = await axios.get(`http://localhost:5000/api/v1/login/me`)
        dispatch({type: LOAD_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({type: LOAD_USER_FAIL, payload: error })
    }
}


  //errors
export const clearErrors = async ( dispatch ) => {
    dispatch( { type: CLEAR_ERRORS })
}