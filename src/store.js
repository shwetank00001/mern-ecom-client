import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import  thunk  from 'redux-thunk'
import { productReducer } from './reducers/productReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';



const reducer = combineReducers( {
  products  : productReducer
})

let initialState = {};


const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);


export default store