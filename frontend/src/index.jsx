import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AppContextProvider>
);

reportWebVitals();
