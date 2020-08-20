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
            <div classname="auth-page">
                <form className="signup-form" onSubmit={this.handleSignUpClick}>
                    <h3>Sign Up</h3>
                    <label>
                        <div>
                            Email: 
                            <input onChange={this.handleSignUpEmailChange} value={this.state.signUpEmail}/>
                        </div>
                    </label>
                    <label>
                        <div>
                            Password: 
                            <input onChange={this.handleSignUpPasswordChange} value={this.state.signUpPassword}/>
                        </div>
                    </label>

                    <button>Sign Up!</button>
                </form>

                <form className="signin-form" onSubmit={this.handleSignInClick}>
                    <h3>Sign In</h3>
                    <label>
                        <div>
                            Email: 
                            <input onChange={this.handleSignInEmailChange} value={this.state.signInEmail}/>
                        </div>
                    </label>
                    <label>
                        <div>
                            Password: 
                            <input onChange={this.handleSignInPasswordChange} value={this.state.signInPassword}/>
                        </div>
                    </label>

                    <button>Sign In!</button>
                </form>
            </div>
        )
    }
}
