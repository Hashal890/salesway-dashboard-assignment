import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const ProgressBar = ({ feedback }) => {
  const total = feedback.negative + feedback.positive + feedback.neutral;
  const negativePercent = (feedback.negative / total) * 100;
  const positivePercent = (feedback.positive / total) * 100;
  const neutralPercent = (feedback.neutral / total) * 100;

  return (
    <Flex
      width="300px"
      height="18px"
      borderRadius="12px"
      overflow="hidden"
      border="1px solid #ccc"
      mx="auto"
      my={4}
    >
      <Box width={`${negativePercent}%`} bg={"red.400"} height={"100%"} />
      <Box width={`${neutralPercent}%`} bg={"yellow.400"} height={"100%"} />
      <Box width={`${positivePercent}%`} bg={"green.400"} height={"100%"} />
    </Flex>
  );
};

export default ProgressBar;
