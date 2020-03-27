import React, { useState, useCallback } from 'react';
import Chat from "./chat/pages/Chat";
import Auth from "./user/pages/Auth";
import { AuthContext } from './shared/context/auth-context';
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Content from "./shared/components/UIElements/Content";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(false);

  const login = useCallback((username) => {
    setIsLoggedIn(true);
    setUsername(username);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let output;

  return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
          <MainNavigation />
          <Content>
            <Chat username={username} isLoggedIn={isLoggedIn}/>
          </Content>
        </AuthContext.Provider>

  );
};

export default App;

