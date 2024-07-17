import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import HeadingForDashboardComponents from "../../../common/Heading";
import TopProductsTable from "./TopProductsTable";

const ComponentSix = () => {
  return (
    <Box>
      <HStack justifyContent={"space-between"} alignItems={"center"} gap={2}>
        <HeadingForDashboardComponents title={"Top Products"} />
        <Box
          border={"1px solid grey"}
          borderRadius={"20px"}
          p={2}
          px={4}
          cursor={"pointer"}
        >
          Full results
        </Box>
      </HStack>
      <TopProductsTable />
    </Box>
  );
};

export default ComponentSix;
