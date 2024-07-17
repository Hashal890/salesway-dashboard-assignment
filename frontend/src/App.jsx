import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { userState } = useContext(AppContext);

  return <Box>{userState.isLoggedIn ? <Dashboard /> : <Login />}</Box>;
};

export default App;
