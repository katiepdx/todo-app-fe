import React, { Component } from 'react';
import { fetchTodos } from './todos-api.js';

export default class ListAllTodosPage extends Component {
    // set state for todos
    state = {
        todos: []
    }

    // look for token - if no token, redirect to homepage
    componentDidMount = async () => {
        if(!this.props.token) {
            this.props.history.push('/auth')
        } else {
            // if there is a token, get all of user's todos
            const data = await fetchTodos(this.props.token);

            // set state using data 
            this.setState({
                todos: data.body
            })
        }
    }

    render() {
        return (
            <div className="all-todos">
                All Todos
                {/* map through the todos array and list them to page */}
                {
                    this.state.todos.map((todo) => {
                        return <div className="todo-tile">
                            <p>Task: {todo.todo}</p>
                            <p>Completed: {todo.complete ? 'Yes' : 'No'}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
