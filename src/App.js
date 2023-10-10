import React from 'react';
import Header from './components/layout/Header/Header';
import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products';
import Home from './components/Home/Home';
import Search from './components/Product/Search';
import LoginSignUp from './components/User/LoginSignUp'


import store from './store'
import { loadUser } from './actions/userAction';


const App = () => {
    React.useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto', 'Droid Sans'],
            },
        });

        store.dispatch(loadUser())

    }, []);

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/product/:id' element={<ProductDetails />} />
                <Route exact path='/products' element={<Products />} />
                <Route path='/products/:keyword?' element={<Products />} />
                <Route exact path='/search' element={<Search />} />
                <Route exact path='/login' element={<LoginSignUp />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
