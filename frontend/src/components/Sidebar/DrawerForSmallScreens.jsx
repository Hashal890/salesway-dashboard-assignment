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
          h="full"
          overflowX="hidden"
          overflowY="auto"
          bg={useColorModeValue("white", "gray.800")}
          borderColor={useColorModeValue("inherit", "gray.700")}
          borderRightWidth="1px"
          w="60"
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
          <Flex
            direction="column"
            fontSize="md"
            color="gray.600"
            aria-label="Main Navigation"
          >
            {SidebarItems.map((item) => (
              <NavbarItem key={item.id} icon={item.icon} title={item.title} />
            ))}
          </Flex>
          <Flex
            px="4"
            py="5"
            mt={10}
            justifyContent="center"
            alignItems="center"
          >
            <SidebarUserMenuButton />
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerForSmallScreens;
