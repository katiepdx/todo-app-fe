import React, { Component } from 'react';
import { createOneTodo, fetchTodos, completeOneTodo } from './todos-api.js';

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

        const data = await fetchTodos(this.props.token);

        // set state using data 
        this.setState({
            todos: data.body
        })
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

            const data = await fetchTodos(this.props.token);

            // update state with updated todo list
            this.setState({
                todos: data.body
            })

        } catch(e) {
            return { error: e.message }
        }
    }
    handleCompletedChange = async (id, todo) => {
        try {
            await completeOneTodo(id, {
                todo: todo.todo,
                completed: true
            });

            const data = await fetchTodos(this.props.token);

            // update state with updated todo list
            this.setState({
                todos: data.body
            })

        } catch(e) {
            return { error: e.message }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleCreateTodo}>
                    <h3>Create a todo</h3>
                    <label>
                        Todo:
                        <input onChange={this.handleTodoChange} type="text" value={this.state.todo} />
                    </label> 
                    <button>Create Todo</button>
                </form>
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
            </div>
        )
    }
}
