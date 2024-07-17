import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiFlashlightFill } from "react-icons/ri";
import SidebarUserMenuButton from "./SidebarUserMenuButton";
import NavbarItem from "./NavbarItem";
import { SidebarItems } from "./SidebarItemsData";

const DrawerForSmallScreens = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Box
          pos="fixed"
          top="0"
          left="0"
          zIndex="sticky"
          h="100vh"
          overflowY="auto"
          bg={useColorModeValue("white", "gray.800")}
          borderColor={useColorModeValue("inherit", "gray.700")}
          borderRightWidth="1px"
          w="60"
        >
          <Flex px="4" py="5" align="center" borderBottomWidth="1px">
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
          <Flex
            direction="column"
            fontSize="md"
            color="gray.600"
            aria-label="Main Navigation"
            pt={4}
          >
            {SidebarItems.map((item) => (
              <NavbarItem key={item.id} icon={item.icon} title={item.title} />
            ))}
          </Flex>
          <Flex px="4" py="5" mt={4} borderTopWidth="1px">
            <SidebarUserMenuButton />
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerForSmallScreens;
