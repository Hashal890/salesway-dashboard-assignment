import React from "react";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const SidebarUserMenuButton = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        size={"sm"}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        _hover={{ textDecoration: "none" }}
      >
        <Avatar
          size={"sm"}
          name="Ahmad"
          src="https://avatars2.githubusercontent.com/u/37842853?v=4"
        />
      </MenuButton>
      <MenuList fontSize={17} zIndex={5555}>
        <MenuItem as={Box} href="#">
          My profile
        </MenuItem>
        <MenuItem as={Box} href="#">
          Change password
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SidebarUserMenuButton;
