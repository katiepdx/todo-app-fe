import React, { Component } from 'react';

export default class HomePage extends Component {
    handleWelcomeButton = (e) => {
        e.preventDefault();
        // direct to auth - signup/signin page
        this.props.history.push('/auth')
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleWelcomeButton}>
                    Welcome! Click the button to go to sign-up/login page.
                    <button>Let's Go!</button>
                </form>
            </div>
        )
    }
}
