import React from 'react';
import style from './Auth.module.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        emailValid: true,
        passwordValid: true,
        isSignup: true,
        authErrorMsg: '',
        loading: false
    }

    emailChangeHandler = (event) => {
        let email = event.target.value;
        this.setState({ email: email });
    }

    passwordChangeHandler = (event) => {
        let password = event.target.value;
        this.setState({ password: password });
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        //Email validation
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = this.state.email;
        let emailTest = emailPattern.test(email);

        if (emailTest) {
            this.setState({ emailValid: true });
        } else {
            this.setState({ emailValid: false });
        }

        //Password validation
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const password = this.state.password;
        let passwordTest = passwordPattern.test(password);

        if (passwordTest) {
            this.setState({ passwordValid: true });
        } else {
            this.setState({ passwordValid: false });
        }

        //User sign up to firebase
        if (emailTest && passwordTest && this.state.isSignup) {
            console.log('in signup ');
            this.setState({ loading: true });
            const newUser = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiWKUXbu4zqY6wPxR1T5rsg-721hh3p2Q', newUser)
                .then(response => {
                    console.log(response);
                    this.props.onAuthSuccess(response.data.idToken, response.data.localId);
                    this.setState({ loading: false, authErrorMsg: '' });
                    this.props.history.replace("/");
                })
                .catch(error => {
                    console.log(error.response.data.error.message);
                    this.setState({ loading: false, authErrorMsg: error.response.data.error.message });
                });
        }

        //User sign In to firebase
        if (emailTest && passwordTest && this.state.isSignup === false) {
            console.log('in signIn');
            this.setState({ loading: true });
            const newUser = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiWKUXbu4zqY6wPxR1T5rsg-721hh3p2Q', newUser)
                .then(response => {
                    console.log(response);
                    this.props.onAuthSuccess(response.data.idToken, response.data.localId);
                    this.setState({ loading: false, authErrorMsg: '' });
                    this.props.history.replace("/");
                })
                .catch(error => {
                    console.log(error.response.data.error.message);
                    this.setState({ loading: false, authErrorMsg: error.response.data.error.message });
                });
        }


    }

    switchSignupHandler = () => {

        if (this.state.isSignup) {
            this.setState({
                email: '',
                password: '',
                emailValid: true,
                passwordValid: true,
                isSignup: false,
                authErrorMsg: '',
                loading: false
            });
        } else {
            this.setState({
                email: '',
                password: '',
                emailValid: true,
                passwordValid: true,
                isSignup: true,
                authErrorMsg: '',
                loading: false
            });
        }
    }

    render() {

        let warningStyleEmail = style.Remove;
        if (this.state.emailValid === false) {
            warningStyleEmail = style.Validation;
        }

        let warningStylePassword = style.Remove;
        if (this.state.passwordValid === false) {
            warningStylePassword = style.Validation;
        }

        let form = (
            <form onSubmit={this.formSubmitHandler}>
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.emailChangeHandler} />
                <p className={warningStyleEmail}>Please enter a valid email.</p>
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler} />
                <p className={warningStylePassword}>Minimum 8 characters with atleast 1 letter and 1 number.</p>
                <button type="submit">Submit</button>
                <p className={style.Validation}>{this.state.authErrorMsg}</p>
                <p className={style.ChangeAuthMode} onClick={this.switchSignupHandler}>Go to {this.state.isSignup ? 'Sing In' : 'Sign Up'}</p>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div>
                {form}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAuthSuccess: (idToken, userId) => dispatch({ type: 'AUTH_SUCCESS', idToken: idToken, userId: userId })
    }
}

export default connect(null, mapDispatchToProps)(Auth);
