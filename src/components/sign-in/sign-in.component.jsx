import React, { useState } from 'react';
import { connect } from 'react-redux';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
    googleSignInStart,
    emailSignInStart
} from '../../redux/user/user.action';
import './sign-in.styles.scss';

const Signin = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredential, setCredential] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredential({ ...userCredential, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action='' onSubmit={handleSubmit}>
                <FromInput
                    name='email'
                    value={email}
                    label='email'
                    type='email'
                    handleChange={handleChange}
                    required
                />
                <FromInput
                    name='password'
                    value={password}
                    label='password'
                    type='password'
                    handleChange={handleChange}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Signin);
