import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import  thunk  from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({})

let initialState = {};


const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
);


export default store