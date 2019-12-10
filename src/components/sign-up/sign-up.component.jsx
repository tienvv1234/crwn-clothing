import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.action.js';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [userProfile, setProfile] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userProfile;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        signUpStart(displayName, email, password);

        // try {
        //   const { user } = await auth.createUserWithEmailAndPassword(
        //     email,
        //     password
        //   );

        //   await createUserProfileDocument(user, { displayName });

        //   this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        //   });
        // } catch (error) {
        //   console.log(error);
        // }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setProfile({ ...userProfile, [name]: value });
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up=form' onSubmit={handleSubmit} action=''>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) =>
        dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
