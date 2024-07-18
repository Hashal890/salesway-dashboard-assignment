import React, { createContext, useState } from "react";

const initUserState = {
  isLoggedIn: false,
  username: "",
  password: "",
};

const initDashboardComponentsDataState = {
  one: {},
  comparisonData: [],
  scoreData: {},
  device: {},
  feedback: {},
  topProductsData: [],
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(initUserState);
  const [dashboardComponentsDataState, setDashboardComponentsDataState] =
    useState(initDashboardComponentsDataState);

  const updateUserState = (newState) => {
    setUserState(newState);
  };

  const updateDashboardComponentsDataState = (newData) => {
    setDashboardComponentsDataState((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        userState,
        updateUserState,
        dashboardComponentsDataState,
        updateDashboardComponentsDataState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
