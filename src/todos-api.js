import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

// signup function 
export function signUpUser(userData) {
    try {
        // make POST req to signup endpoint and send the userData
        return request.post(`${URL}/auth/signup`, userData)
    } catch(e) {
        return { error: e.message }
    }
}

// signin function 
export function signInUser(userData) {
    try {
        // make POST req to signin endpoint and send the userData
        return request.post(`${URL}/auth/signin`, userData)
    } catch(e) {
        return { error: e.message }
    }
}

// fetch all of users todos function
export function fetchTodos() {
    // get token from localStorage 
    const token = localStorage.getItem('token');

    try {
        return request
            // make GET req to todos endpoint 
            .get(`${URL}/api/todos`, token)
            // send Authorization 
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

// create one todo
export function createOneTodo(todoData) {
    // get token from localStorage 
    const token = localStorage.getItem('token');

    try {
        return request
            // make POST req to todos endpoint 
            .post(`${URL}/api/todos`, todoData)
            // send Authorization 
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}