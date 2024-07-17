import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ComponentOneCard = ({ title, value }) => {
  return (
    <Box
      p={3}
      pr={12}
      border={"1px solid grey"}
      borderRadius={"14px"}
      cursor={"pointer"}
    >
      <Text
        textTransform={"capitalize"}
        fontSize={"14px"}
        fontWeight={600}
        color={"gray"}
      >
        {title}
      </Text>
      <Text fontSize={"18px"} color={"black"} fontWeight={600}>
        {value}
      </Text>
    </Box>
  );
};

export default ComponentOneCard;
