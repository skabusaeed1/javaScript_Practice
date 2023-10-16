import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Context from './Context';
import {Provider} from 'react-redux'
import {store} from './Reduxfile/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
    </Provider>
);

