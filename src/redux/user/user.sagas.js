import { takeLatest, put, all, call } from 'redux-saga/effects';
import AxiosServies from '../../api/axios';
import UserActionType from './user.type';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.action';
import UserActionTypes from './user.type';
import { Auth } from 'aws-amplify';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        console.log('userRef', userRef);
        const userSnapshot = yield userRef.get();
        console.log('userSnapshot', userSnapshot.data())
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);

        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithCognito({ payload: { email, password } }){
    try {
        console.log('test');
        const data = yield Auth.signIn('tienvv1234', 'aA@123456');
        console.log('data', data);
        if(data.challengeName === 'NEW_PASSWORD_REQUIRED'){
            const loggedUser = yield Auth.completeNewPassword(
                data,              // the Cognito User Object
                'aA@123456',       // the new password
            );
            console.log('loggedUser', loggedUser);
        }

        const user = yield Auth.currentAuthenticatedUser();
        console.log('user', user);
        // const abc = yield user.getSession().promise();
        // console.log('abc', abc);

        const test1 = yield AxiosServies.instance('/auth', {
            method: 'GET',
            headers : {
                Authorization: user.signInUserSession.idToken.jwtToken
            }
        })
        console.log('test1', test1);
        yield put(signInSuccess({ ...data }))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        console.log('isUserAuthenticated')
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCognitoSignInStart() {
    yield takeLatest(UserActionType.COGNITO_SIGN_IN_START, signInWithCognito);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess), call(onCognitoSignInStart)]);
}
