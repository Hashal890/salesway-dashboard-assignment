import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import HeadingForDashboardComponents from "../../../common/Heading";
import { AppContext } from "../../../../context/AppContext";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const ComponentFive = () => {
  const { dashboardComponentsDataState, updateDashboardComponentsDataState } =
    useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const findHeighestFeedback = () => {
    const max = Object.keys(dashboardComponentsDataState.feedback).reduce(
      (a, b) =>
        dashboardComponentsDataState.feedback[a] >
        dashboardComponentsDataState.feedback[b]
          ? a
          : b
    );
    return max;
  };

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/",
        {
          headers: {
            Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
          },
        }
      )
      .then((res) => {
        updateDashboardComponentsDataState({ feedback: res.data });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box p={4} pb={6} borderBottom={"1px dotted grey"} m={2}>
        <Flex justifyContent="center" alignItems="center" height="200px">
          <Spinner size="xl" />
        </Flex>
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4} pb={6} borderBottom={"1px dotted grey"} m={2}>
        <Text fontSize={"14px"} color={"red.500"}>
          Error fetching data
        </Text>
      </Box>
    );
  }

  return (
    <Box p={4} pb={6} borderBottom={"1px dotted grey"} m={2}>
      <Text fontSize={"14px"} color={"grey"}>
        Community feedback
      </Text>
      {dashboardComponentsDataState.feedback.negative && (
        <HeadingForDashboardComponents
          title={`Mostly ${findHeighestFeedback()}`}
        />
      )}
      <ProgressBar feedback={dashboardComponentsDataState.feedback} />
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text>Negative</Text>
          <Text>{dashboardComponentsDataState.feedback.negative}</Text>
        </Box>
        <Box>
          <Text>Positive</Text>
          <Text>{dashboardComponentsDataState.feedback.positive}</Text>
        </Box>
        <Box>
          <Text>Neutral</Text>
          <Text>{dashboardComponentsDataState.feedback.neutral}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ComponentFive;
