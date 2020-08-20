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
                <h3>Your Todos</h3>
                {
                this.state.todos.map((todo) => {
                    if(todo.completed === false) {
                        return <div className="todo-tile not-completed" onClick={() => this.handleCompletedChange(todo.id, todo)} key={todo.id} >
                            <div>
                                <p>Task: {todo.todo}</p>
                                <p>Completed: {todo.completed ? 'Yes': 'No' }</p>
                            </div>
                        </div>
                    } else {
                        return <div className="todo-tile yes-completed" onClick={() => this.handleCompletedChange(todo.id, todo)} key={todo.id} >
                        <div>
                            <p>Task: {todo.todo}</p>
                            <p>Completed: {todo.completed ? 'Yes': 'No' }</p>
                        </div>
                    </div>
                    }
                })
                }
            </div>
        )
    }
}
