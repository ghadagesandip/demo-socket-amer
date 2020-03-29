import * as AuthService from './../Services/auth';

export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT ="LOGOUT";

export function login(loginData) {
    
    return dispatch => { 
        
        dispatch(loginRequestStarted(true));

        AuthService.login(loginData).then(
            res => {
                dispatch(loginSuccess(res.data.data[0]));
            },
            err => {
                dispatch(loginFailed(err))
            }
        )
    }
}

export function loginRequestStarted(bool){

    return {
		type:LOGIN_REQ,
		payload: {
            loggingIn: true,
        }
	}
}

export function loginSuccess(userInfo) {
    localStorage.setItem('user', JSON.stringify(userInfo));
    return {
		type: LOGIN_SUCCESS,
		payload:{
			userInfo,
            loggingIn: false,
            isLoggedIn: true
		}
    }
    
}

export function loginFailed(error) {
    console.log('error', error)
    return {
		type: LOGIN_FAILURE,
		payload:{
            loggedIn:false, 
            errorMessage: error+'',
            userInfo: {},
            loggingIn: false,
            isLoggedIn: false

		}
	}
}

export function logout() {
    localStorage.clear();
    return { type: LOGOUT };
}
