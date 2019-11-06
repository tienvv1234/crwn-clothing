import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga'
import rootSaga from './root-saga'

const sageMiddleware = createSageMiddleware();

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// like root-reducer this will issues and calls all of our other sagas
// we will run all of them at once, once the application start up in one large saga
sageMiddleware.run(rootSaga);


export const persistor = persistStore(store);

export default { store, persistor };
