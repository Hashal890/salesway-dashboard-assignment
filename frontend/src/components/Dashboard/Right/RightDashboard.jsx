import React from "react";
import { Box } from "@chakra-ui/react";
import ComponentThree from "./score/ComponentThree";
import ComponentFour from "./device/ComponentFour";
import ComponentFive from "./feedback/ComponentFive";

const RightDashboard = () => {
  return (
    <Box
      w={["100%", "100%", "40%"]}
      borderLeft={["0px", "0px", "2px dashed grey"]}
      ml={4}
    >
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
    </Box>
  );
};

export default RightDashboard;
