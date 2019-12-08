import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
class App extends React.Component {
    unsubcribeFromAuth = null;

    componentDidMount() {


        // this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        //     if (userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth);

        //         userRef.onSnapshot(snapShot => {
        //             setCurrentUser({
        //                 id: snapShot.id,
        //                 ...snapShot.data()
        //             });
        //         });
        //     }
        //     console.log('collectionsArray', collectionsArray);
        //     setCurrentUser(userAuth);

        //     // add shop collection to firebase
        //     // addCollectionAndDocument('collections', collectionsArray.map(({title, items}) => ({title, items})))
        // });
    }

    componentWillUnmount() {
        this.unsubcribeFromAuth();
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/checkout' component={CheckoutPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                    <SignInAndSignUpPage />
                                )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionsForPreview
});

export default connect(
    mapStateToProps
)(App);
