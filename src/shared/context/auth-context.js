import { createContext } from 'react';

export const 
AuthContext = createContext({

    isLoggedIn: false,
    login: (name) => {
        console.log(name);
    },
    logout: () => {
    }
});
