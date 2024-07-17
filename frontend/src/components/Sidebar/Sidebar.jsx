import React from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiFlashlightFill } from "react-icons/ri";
import NavbarItem from "./NavbarItem";
import { SidebarItems } from "./SidebarItemsData";
import SidebarUserMenuButton from "./SidebarUserMenuButton";
import DrawerForSmallScreens from "./DrawerForSmallScreens";
import Dashboard from "../../routes/Dashboard";

const Sidebar = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.700")}
      flexDir={["column", "column", "row"]}
    >
      <Flex
        pos="sticky"
        left="0"
        top="0"
        w="60"
        h={"100vh"}
        bg={useColorModeValue("white", "gray.800")}
        borderRightWidth="1px"
        borderColor={useColorModeValue("inherit", "gray.700")}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
        display={{ base: "none", md: "flex" }}
      >
        <Flex px="4" py="5" align="center">
          <Icon as={RiFlashlightFill} h={8} w={8} />
          <Text
            fontSize="2xl"
            ml="2"
            color={useColorModeValue("brand.500", "white")}
            fontWeight="semibold"
          >
            Salesway
          </Text>
        </Flex>
        <Flex direction="column" flex="1" px="4">
          {SidebarItems.map((item) => (
            <NavbarItem key={item.id} icon={item.icon} title={item.title} />
          ))}
        </Flex>
        <Flex px="4" py="5" align="center">
          <SidebarUserMenuButton />
        </Flex>
      </Flex>
      <Flex
        display={{ base: "flex", md: "none" }}
        justify="space-between"
        align="center"
        px={4}
        py={3}
        borderBottomWidth="1px"
        w="100%"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Icon as={RiFlashlightFill} h={8} w={8} />
        <IconButton
          aria-label="Open Sidebar"
          icon={<Icon as={RiFlashlightFill} />}
          onClick={onToggle}
        />
      </Flex>
      <DrawerForSmallScreens isOpen={isOpen} onClose={onClose} />
      <Box
        as="main"
        flex="1"
        p={4}
        minH="30rem"
        bg={useColorModeValue("white", "gray.800")}
        transition=".3s ease"
      >
        <Dashboard />
      </Box>
    </Flex>
  );
};

export default Sidebar;
