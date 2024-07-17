import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, Progress, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../../../context/AppContext";

const ComponentThree = () => {
  const { dashboardComponentsDataState, updateDashboardComponentsDataState } =
    useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/",
        {
          headers: {
            Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
          },
        }
      )
      .then((res) => {
        updateDashboardComponentsDataState({ scoreData: res.data });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={4} pb={6} borderBottom={"1px dotted grey"} m={2}>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="200px">
          <Spinner size="xl" />
        </Flex>
      ) : error ? (
        <Text textAlign="center" color="red.500">
          Error fetching data
        </Text>
      ) : (
        dashboardComponentsDataState &&
        dashboardComponentsDataState.scoreData && (
          <>
            <Progress
              hasStripe
              value={dashboardComponentsDataState.scoreData.score || 0}
              maxW={"300px"}
              m={"auto"}
              borderRadius={"20px"}
            />
            <Text
              textAlign={"center"}
              mt={4}
              fontWeight={600}
              fontSize={"24px"}
            >
              {dashboardComponentsDataState.scoreData.score}
            </Text>
            <Text textAlign={"center"} fontSize={"12px"}>
              of 100 points
            </Text>
            <Box mt={4}>
              <Text textAlign={"center"} fontWeight={600} fontSize={"24px"}>
                {dashboardComponentsDataState.scoreData.title}
              </Text>
              <Text textAlign={"center"} fontSize={"12px"}>
                {dashboardComponentsDataState.scoreData.message}
              </Text>
            </Box>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Button
                mt={4}
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                border={"1px solid grey"}
                p={2}
                borderRadius={"20px"}
                fontSize={"12px"}
              >
                Improve your score
              </Button>
            </Flex>
          </>
        )
      )}
    </Box>
  );
};

export default ComponentThree;
