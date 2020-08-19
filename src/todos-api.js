import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

// signup function 

export function signUpUser(userData) {
    try {
        // make POST req to signup endpoint and send the userData
        return request.post(`${URL}/auth/signup`, userData)
    } catch(e) {
        throw { error: e.message }
    }
}
