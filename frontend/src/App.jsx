// import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";
// import Login from "./routes/Login";
// import { AppContext } from "./context/AppContext";

const App = () => {
  // const { userState } = useContext(AppContext);

  // return <Box>{userState.isLoggedIn ? <Dashboard /> : <Login />}</Box>;

  return (
    <Box>
      <Sidebar />
    </Box>
  );
};

export default App;
