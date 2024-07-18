import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  // const { userState } = useContext(AppContext);

  // return (
  //   <Box fontFamily={"Poppins, sans-serif"}>
  //     {userState.isLoggedIn ? <Sidebar /> : <Login />}
  //   </Box>
  // );

  return (
    <Box fontFamily={"Poppins, sans-serif"}>
      <Sidebar />
    </Box>
  );
};

export default App;
