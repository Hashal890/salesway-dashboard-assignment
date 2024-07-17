import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../../context/AppContext";
import ComponentOneCard from "./ComponentOneCard";

const ComponentOne = () => {
  const { dashboardComponentsDataState, updateDashboardComponentsDataState } =
    useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/",
        {
          headers: {
            Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
          },
        }
      )
      .then((res) => {
        updateDashboardComponentsDataState({ one: res.data });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={["16px", "16px", "20px"]} fontWeight={"bold"}>
          Dashboard
        </Text>
        <Flex
          fontSize={["14px", "14px", "16px"]}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <Text>Compare to</Text>
          <Select
            placeholder="Select option"
            maxW={"120px"}
            size={"sm"}
            cursor={"pointer"}
            borderRadius={"20px"}
            defaultValue={"last-year"}
          >
            <option value="last-year">Last year</option>
            <option value="last-month">Last month</option>
          </Select>
        </Flex>
      </Flex>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" minHeight="200px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          mt={8}
          gap={2}
        >
          {dashboardComponentsDataState.one &&
            Object.keys(dashboardComponentsDataState.one).map((key) => (
              <ComponentOneCard
                key={key}
                title={key}
                value={dashboardComponentsDataState.one[key]}
              />
            ))}
        </Flex>
      )}
    </Box>
  );
};

export default ComponentOne;
