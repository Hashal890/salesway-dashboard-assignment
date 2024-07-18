import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  CircularProgress,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import TopProductCard from "./TopProductCard";
import { AppContext } from "../../../../context/AppContext";

const TopProductsTable = () => {
  const { dashboardComponentsDataState, updateDashboardComponentsDataState } =
    useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://salesway-dashboard-assignment.onrender.com/top-products")
      .then((res) => {
        updateDashboardComponentsDataState({
          topProductsData: res.data.topProductsData,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <TableContainer>
      {loading ? (
        <Box textAlign="center" mt={4}>
          <CircularProgress isIndeterminate color="blue.300" />
          <Box mt={2}>Loading top products...</Box>
        </Box>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Sold amount</Th>
              <Th>Unit price</Th>
              <Th>Revenue</Th>
              <Th>Rating</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dashboardComponentsDataState &&
              dashboardComponentsDataState.topProductsData &&
              dashboardComponentsDataState.topProductsData.map((item) => (
                <TopProductCard key={item._id} {...item} />
              ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default TopProductsTable;
