import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import  thunk  from 'redux-thunk'
import { productsDetailsReducer, productsReducer } from './reducers/productReducer';
import { composeWithDevTools } from 'redux-devtools-extension';



const reducer = combineReducers( {
  products: productsReducer,
  productDetails : productsDetailsReducer
})

let initialState = {
};


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store