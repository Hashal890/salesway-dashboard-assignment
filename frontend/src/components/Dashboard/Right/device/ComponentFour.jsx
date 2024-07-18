import { Box } from "@chakra-ui/react";
import React from "react";
import HeadingForDashboardComponents from "../../../common/Heading";

const ComponentFour = () => {
  return (
    <Box p={4} pb={6} borderBottom={"1px dotted grey"} m={2} x>
      <HeadingForDashboardComponents title={"Customers by device"} />
    </Box>
  );
};

export default ComponentFour;
