import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// Provider is a component that is the parent of everything inside of our application
// and as the parent it allows us to get access to all of the things related
// to the store that we are going to put all of the actual code we want to store on redux statge
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import './index.css';
import App from './App';
import Amplify from 'aws-amplify'
import AppResource from './aws-exports.json'

let configure = {
Auth: {
	identityPoolId: AppResource.identityPoolId,
    // REQUIRED - Amazon Cognito Region
    region: AppResource.region,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: AppResource.userPoolId,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: AppResource.userPoolWebClientId,
	}
}
console.log('configure', configure)
Amplify.configure(configure);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
