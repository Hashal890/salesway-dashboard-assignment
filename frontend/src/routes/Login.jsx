import { useContext, useState } from "react";
import axios from "axios";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "test@example.com",
    phone_number: 1234567890,
    input_code: 0,
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { updateUserState } = useContext(AppContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = () => {
    setLoading(true);
    axios
      .post(
        "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/login",
        state
      )
      .then((res) => {
        setLoading(false);
        updateUserState({ ...state, isLoggedIn: true });
        toast({
          title: "Login successful.",
          description: "You have successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Login failed.",
          description: err.response ? err.response.data.message : err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          m={2}
        >
          Sign In
        </Heading>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="abcdefghij"
            _placeholder={{ color: "gray.500" }}
            value={state.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={state.password}
            onChange={handleChange}
            placeholder={1234567890}
          />
        </FormControl>
        <Stack spacing={6} align={"center"} mt={4} w={"100%"}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleLogin}
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Login;
