import ShopActionTypes from './shop.type';
// import {
//     firestore,
//     convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils';

// export const updateCollections = collectionsMap => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsError = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// way 2
// export const fetchCollectionsStartAsync = () => async (dispatch, getState) => {
//     try {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         const snapshot = await collectionRef.get()
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));

//     } catch (error) {
//         dispatch(fetchCollectionsError(error.message))
//     }
// }

// way 1
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef
//             .get()
//             .then(snapshot => {
//                 const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//             })
//             .catch(error => dispatch(fetchCollectionsError(error.message)));
//     };
// };
