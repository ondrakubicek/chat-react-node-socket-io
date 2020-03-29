import React, { useState, useCallback } from 'react';
import Chat from "./chat/pages/Chat";
import Auth from "./user/pages/Auth";
import { AuthContext } from './shared/context/auth-context';
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Content from "./shared/components/UIElements/Content";
import ChatSocket from './shared/util/ChatSocket';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(false);
  const chatSocket = new ChatSocket();

  const login = useCallback((username) => {
    setIsLoggedIn(true);
    setUsername(username);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    chatSocket.logout();
  }, []);

  let output = false;
      
  if(isLoggedIn) {
    output =  <Chat username={username} isLoggedIn={isLoggedIn} chatSocket={chatSocket}/>;
  } else {
    output = (
      <Auth username={username}/>
    );
  }


  return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
          <MainNavigation/>
          <Content>
            {output}
          </Content>
        </AuthContext.Provider>

  );
};

export default App;

