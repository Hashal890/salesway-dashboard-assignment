import React, { useContext, useEffect, useState } from "react";
import { Box, HStack, Select, CircularProgress } from "@chakra-ui/react";
import axios from "axios";
import ComparisonBarChart from "./ComparisonBarChart";
import { AppContext } from "../../../../context/AppContext";
import HeadingForDashboardComponents from "../../../common/Heading";

const ComponentTwo = () => {
  const { dashboardComponentsDataState, updateDashboardComponentsDataState } =
    useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/comparison")
      .then((res) => {
        updateDashboardComponentsDataState({
          comparisonData: res.data.comparisonData,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Box mt={8}>
      <HStack justifyContent={"space-between"} alignItems={"center"} mb={4}>
        <HeadingForDashboardComponents title={"Comparison"} />
        <Select
          placeholder="Select option"
          maxW={"120px"}
          size={"sm"}
          cursor={"pointer"}
          borderRadius={"20px"}
          defaultValue={"six-months"}
        >
          <option value="six-months">6 months</option>
          <option value="one-year">1 year</option>
        </Select>
      </HStack>
      {loading ? (
        <Box textAlign="center">
          <CircularProgress isIndeterminate color="blue.300" />
          <Box mt={2}>Loading bar graph data...</Box>
        </Box>
      ) : (
        <ComparisonBarChart
          data={dashboardComponentsDataState.comparisonData}
        />
      )}
    </Box>
  );
};

export default ComponentTwo;
