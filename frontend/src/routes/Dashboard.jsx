import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftDashboard from "../components/Dashboard/Left/LeftDashboard";
import RightDashboard from "../components/Dashboard/Right/RightDashboard";

const Dashboard = () => {
  return (
    <Flex gap={2} flexDir={["column", "column", "column", "row"]}>
      <LeftDashboard />
      <RightDashboard />
    </Flex>
  );
};

export default Dashboard;
