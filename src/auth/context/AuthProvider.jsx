
import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// const initialState = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const[authState, dispatch] = useReducer (authReducer, {}, init);

    const loginUser = (name = '') => {

        const user = {
            id: 'ABC',
            name: name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logoutUser = () => {

        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ 
            ...authState,
            login: loginUser,
            logout: logoutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
