import React, { Component } from 'react';
import { signUpUser, signInUser } from './todos-api.js';

export default class AuthPage extends Component {
    // set state 
    state = {
        signUpEmail: '',
        signUpPassword: '',
        signInEmail: '',
        signInPassword: ''
    };

    // Signup handle methods
    handleSignUpEmailChange = (e) => {
        this.setState({ signUpEmail: e.target.value})
    }

    handleSignUpPasswordChange = (e) => {
        this.setState({ signUpPassword: e.target.value})
    }

    // Signin handle methods
    handleSignInEmailChange = (e) => {
        this.setState({ signInEmail: e.target.value})
    }

    handleSignInPasswordChange = (e) => {
        this.setState({ signInPassword: e.target.value})
    }

    handleSignUpClick = async (e) => {
        e.preventDefault();

        // pass user data to signUpUser function
        const user = await signUpUser({
            // keys must match backend keys 
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        })

        // pass received user token and set to state and localStorage
        this.props.handleToken(user.body.token)

        // redirect to My Todos page
        this.props.history.push('/todos')
    }

    handleSignInClick = async (e) => {
        e.preventDefault();

        // pass user data to signInUser function
        const user = await signInUser({
            // keys must match backend keys 
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })
        console.log(user);

        // pass received user token and set to state and localStorage
        this.props.handleToken(user.body.token)

        // redirect to My Todos page
        this.props.history.push('/todos')
    }

    render() {

        return (
            <div>
                <form className="signup-form" onSubmit={this.handleSignUpClick}>
                    Sign Up
                    <label>
                        Email: 
                        <input onChange={this.handleSignUpEmailChange} value={this.state.signUpEmail}/>
                    </label>
                    <label>
                        Password: 
                        <input onChange={this.handleSignUpPasswordChange} value={this.state.signUpPassword}/>
                    </label>

                    <button>Sign Up!</button>
                </form>
                <form className="signin-form" onSubmit={this.handleSignInClick}>
                    Sign In
                    <label>
                        Email: 
                        <input onChange={this.handleSignInEmailChange} value={this.state.signInEmail}/>
                    </label>
                    <label>
                        Password: 
                        <input onChange={this.handleSignInPasswordChange} value={this.state.signInPassword}/>
                    </label>

                    <button>Sign In!</button>
                </form>
            </div>
        )
    }
}
