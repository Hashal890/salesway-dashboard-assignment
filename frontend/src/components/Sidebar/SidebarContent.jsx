import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { RiFlashlightFill } from "react-icons/ri";
import NavbarItem from "./NavbarItem";
import { SidebarItems } from "./SidebarItemsData";

const SidebarContent = () => (
  <Box
    as="nav"
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
    <VStack
      h="full"
      w="full"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Box w="full">
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
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"
        >
          {SidebarItems.map((item) => (
            <NavbarItem key={item.id} icon={item.icon} title={item.title} />
          ))}
        </Flex>
      </Box>
      <Flex px="4" py="5" justifyContent="center" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            rounded="full"
            variant="link"
            cursor="pointer"
            _hover={{ textDecoration: "none" }}
          >
            <Avatar size="sm" name="test-account" src="test-account" />
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
      </Flex>
    </VStack>
  </Box>
);

export default SidebarContent;
