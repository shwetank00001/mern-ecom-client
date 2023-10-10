import {createStore,applyMiddleware, combineReducers} from 'redux'
import  thunk  from 'redux-thunk'
import { productDetailsReducer, productsReducer } from './reducers/productReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducer';



const reducer = combineReducers( {
  products: productsReducer,
  productDetails : productDetailsReducer,
  user: userReducer
})

let initialState = {
};


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store