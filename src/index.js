import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';

import { positions, transitions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  timeout : 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
root.render(
  <BrowserRouter >
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);

