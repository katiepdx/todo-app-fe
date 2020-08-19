import React, { Component } from 'react';
import { signUpUser } from './todos-api.js';

export default class AuthPage extends Component {
    // set state 
    state = {
        signUpEmail: '',
        signUpPassword: ''
    };

    handleEmailChange = (e) => {
        this.setState({ signUpEmail: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({ signUpPassword: e.target.value})
    }

    handleSignUpClick = async (e) => {
        e.preventDefault();

        // pass user data to signUpUser function
        const user = await signUpUser({
            // keys must match backend keys 
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        })

        // pass token
        this.props.handleToken(user.body.token)

        // redirect to My Todos page
        this.props.history.push('/todos')
    }

    render() {

        return (
            <div>
                <form className="signup-form" onSubmit={this.handleSignUpClick}>
                    Sign up
                    <label>
                        Email: 
                        <input onChange={this.handleEmailChange} value={this.state.signUpEmail}/>
                    </label>
                    <label>
                        Password: 
                        <input onChange={this.handlePasswordChange} value={this.state.signUpPassword}/>
                    </label>

                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}
