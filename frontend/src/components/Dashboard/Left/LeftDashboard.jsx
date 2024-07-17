import React from "react";
import { Box } from "@chakra-ui/react";
import ComponentOne from "./ComponentOne";

const LeftDashboard = () => {
  return (
    <Box w={["100%", "100%", "60%"]}>
      <ComponentOne />
    </Box>
  );
};

export default LeftDashboard;
