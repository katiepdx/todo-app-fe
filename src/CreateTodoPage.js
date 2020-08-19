import React, { Component } from 'react';
import { createOneTodo } from './todos-api.js';

export default class CreateTodoPage extends Component {
    // set state for todos
    state = {
        todos: [],
        todo: '',
        completed: false
    }

    // look for token - if no token, redirect to login page
    componentDidMount = async () => {
        if(!this.props.token) {
            this.props.history.push('/auth')
        }
    }
    
    // make handleCreate method
    handleTodoChange = (e) => {
        this.setState({ todo: e.target.value });
    }

    handleCreateTodo = async (e) => {
        e.preventDefault();

        try {
            await createOneTodo({
                todo: this.state.todo,
                completed: false
            });

            // after creating, redirect to todos where on page load todos state is updated and displayed
            this.props.history.push('/todos')
        } catch(e) {
            return { error: e.message }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleCreateTodo}>
                    Create a todo
                    <label>
                        Todo:
                        <input onChange={this.handleTodoChange} type="text" value={this.state.todo} />
                    </label> 
                    <button>Create Todo</button>
                </form>
            </div>
        )
    }
}
