import { Flex, useColorModeValue } from "@chakra-ui/react";

const NavbarItem = ({ icon, title }) => {
  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      gap={2}
    >
      {icon}
      {title}
    </Flex>
  );
};

export default NavbarItem;
