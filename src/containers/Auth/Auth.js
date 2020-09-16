import React from 'react';
import style from './Auth.module.css';

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        emailValid: true,
        passwordValid: true
    }

    emailChangeHandler = (event) => {
        let email = event.target.value;
        this.setState({email: email});
    }

    passwordChangeHandler = (event) => {
        let password = event.target.value;
        this.setState({password: password});
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        //Email validation
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = this.state.email;
        
        if(emailPattern.test(email)) {
            this.setState({emailValid: true});
        }else{
            this.setState({emailValid: false});
        }

        //Password validation
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const password = this.state.password;

        if(passwordPattern.test(password)){
            this.setState({passwordValid: true});
        }else{
            this.setState({passwordValid: false});
        }
               

    }

    render(){

        let warningStyleEmail = style.Remove;
        if(this.state.emailValid === false){
            warningStyleEmail = style.Validation;
        }

        let warningStylePassword = style.Remove;
        if(this.state.passwordValid === false){
            warningStylePassword = style.Validation;
        }

        return(
            <div>
                <form>
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.emailChangeHandler}/>
                    <p className={warningStyleEmail}>Please enter a valid email.</p>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler}/>
                    <p className={warningStylePassword}>Minimum 8 characters with atleast 1 letter and 1 number.</p>
                    <button onClick={this.formSubmitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Auth;
