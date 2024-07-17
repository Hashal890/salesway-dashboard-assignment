import React from "react";
import { Box } from "@chakra-ui/react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./comparison/ComponentTwo";

const LeftDashboard = () => {
  return (
    <Box w={["100%", "100%", "60%"]}>
      <ComponentOne />
      <ComponentTwo />
    </Box>
  );
};

export default LeftDashboard;
