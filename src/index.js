import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Provider is a component that is the parent of everything inside of our application
// and as the parent it allows us to get access to all of the things related
// to the store that we are going to put all of the actual code we want to store on redux statge
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
