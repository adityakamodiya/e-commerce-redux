import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import "./index.css"
import {store} from './Store'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
  <Provider store={store}>
  <Home/></Provider>
  </>
);

