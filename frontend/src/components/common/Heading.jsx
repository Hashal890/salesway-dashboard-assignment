import { Text } from "@chakra-ui/react";
import React from "react";

const HeadingForDashboardComponents = ({ title }) => {
  return (
    <Text m={4} fontWeight={600} fontSize={"18px"}>
      {title}
    </Text>
  );
};

export default HeadingForDashboardComponents;
