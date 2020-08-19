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

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Nav bar links go here */}
        <Router>
          <div className="nav-bar">
            <div className="nav-links">
              <Link to='/todos'>My Todos</Link>
              <Link to='/create'>Create Todo</Link>
            </div>
          </div>

          <Switch>
            {/* list page route */}
            <Route
              path="/todos"
              exact
              render={(routerProps) => <ListAllTodosPage {...routerProps} />} 
            />
            {/* add an entry page route */}
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreateTodoPage {...routerProps} />} 
            />

          </Switch>
        </Router>
      </div>
    )
  }
}
