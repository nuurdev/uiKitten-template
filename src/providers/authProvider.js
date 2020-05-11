import React, { useState } from "react";

export const AuthStateContext = React.createContext(null);
export const AuthDispatchContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    authenticated: false,
    authenticating: false,
  });

  const handleSetAuthentication = () => {
    setUserState((prevState) => ({ ...prevState, authenticating: true }));
    setTimeout(() => {
      setUserState((prevState) => ({
        authenticated: !prevState.authenticated,
        authenticating: false,
      }));
    }, 300);
  };

  return (
    <AuthStateContext.Provider
      value={{
        authenticated: userState.authenticated,
        authenticating: userState.authenticating,
      }}
    >
      <AuthDispatchContext.Provider value={handleSetAuthentication}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
