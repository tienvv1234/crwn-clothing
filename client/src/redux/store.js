import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga'
import { fetchCollectionsStart } from './shop/shop.sagas'

const sageMiddleware = createSageMiddleware();

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sageMiddleware.run(fetchCollectionsStart);


export const persistor = persistStore(store);

export default { store, persistor };
