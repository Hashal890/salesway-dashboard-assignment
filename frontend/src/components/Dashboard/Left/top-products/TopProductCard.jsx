import React from "react";
import { Td, Tr } from "@chakra-ui/react";

const TopProductCard = ({
  product,
  sold_amount,
  unit_price,
  revenue,
  rating,
}) => {
  return (
    <Tr>
      <Td>{product}</Td>
      <Td>{sold_amount}</Td>
      <Td>{unit_price}</Td>
      <Td>{revenue}</Td>
      <Td>{rating}</Td>
    </Tr>
  );
};

export default TopProductCard;
