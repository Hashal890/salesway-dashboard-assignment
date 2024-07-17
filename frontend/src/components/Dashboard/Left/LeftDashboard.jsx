import React from "react";
import { Box } from "@chakra-ui/react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./comparison/ComponentTwo";
import ComponentSix from "./top-products/ComponentSix";

const LeftDashboard = () => {
  return (
    <Box w={["100%", "100%", "60%"]}>
      <ComponentOne />
      <ComponentTwo />
      <ComponentSix />
    </Box>
  );
};

export default LeftDashboard;
