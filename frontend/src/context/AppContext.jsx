import React, { createContext, useState } from "react";

const initUserState = {
  isLoggedIn: false,
  username: "",
  password: "",
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(initUserState);

  const updateUserState = (newState) => {
    setUserState(newState);
  };

  return (
    <AppContext.Provider value={{ userState, updateUserState }}>
      {children}
    </AppContext.Provider>
  );
};
