import React from "react";
import { Box } from "@chakra-ui/react";
import ComponentThree from "./score/ComponentThree";

const RightDashboard = () => {
  return (
    <Box
      w={["100%", "100%", "40%"]}
      borderLeft={["0px", "0px", "2px dashed grey"]}
      minH={"100vh"}
      ml={4}
    >
      <ComponentThree />
    </Box>
  );
};

export default RightDashboard;
