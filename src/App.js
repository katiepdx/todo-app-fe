import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Link
} from 'react-router-dom';
import ListAllTodosPage from './ListAllTodosPage.js';
import CreateTodoPage from './CreateTodoPage.js';
import AuthPage from './AuthPage.js';
import HomePage from './HomePage.js';

export default class App extends Component {
  // add token to state - state looks for token in localStorage
  state = {
    token: localStorage.getItem('token')
  }

  // handleToken function and pass in token 
  handleToken = (token) => {
    // keep them synced 
    // set TOKEN to state
    this.setState({
      token: token
    })
    // set TOKEN to localStorage
    localStorage.setItem('token', token)
  }

  render() {
    return (
      <div className="App">
        {/* Nav bar links go here */}
        <Router>
          <div className="nav-bar">
            <div className="nav-links">
              <Link to='/'>Home Page</Link>
              <Link to='/auth'>Auth Page</Link>
              <Link to='/todos'>My Todos</Link>
              <Link to='/create'>Create Todo</Link>
            </div>
          </div>

          <Switch>
            {/* home page route */}
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
            {/* Auth - sign up or sign-in route */}
            <Route
              path="/auth"
              exact
              render={(routerProps) => <AuthPage handleToken={this.handleToken} {...routerProps} />} 
            />
            {/* list page route */}
            <Route
              path="/todos"
              exact
              render={(routerProps) => <ListAllTodosPage handleToken={this.handleToken} {...routerProps} />} 
            />
            {/* add an entry page route */}
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreateTodoPage handleToken={this.handleToken} {...routerProps} />} 
            />

          </Switch>
        </Router>
      </div>
    )
  }
}
