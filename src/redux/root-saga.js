import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
export default function* rootSaga(){
    // here will explain the all function
    // all takes an array of sagas
    // typically we will do this multiple time
    // yield different sagas
    // yield fetchCoolectionsStart();
    // yield fetchCoolectionsStart();
    // yield fetchCoolectionsStart();
    // this code isn't running these three individual sagas concurrently
    // this next yield is actually waiting for this yield and this saga to resolve with some value or atleast when that saga leaves at some point
    // which gives control back to our roots saga so that it can continue on executing the next saga.
    // we don't want that
    // we want all our code to pretty much initialize as soon as possible side by side and that's what all allow us to do by using yield all call
    // we are able to actually call any number of sagas inside of this array and initialize them all on separate task streams
    // which is exactly as we learned with take every what we want to do we want to be able to have individual tasks that only care about saga
    // that they are looking for right and we want to initialize them all at once whenever possible and that's why we use the all effect


    yield all([call(fetchCollectionsStart), call(userSagas)]);
}