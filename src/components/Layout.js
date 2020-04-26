import React from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Stack,
  DarkMode,
} from "@chakra-ui/core";
import { customTheme } from "../theme";
import Navbar from "./NavBar";
import Footer from "./Footer";

const App = (props) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <DarkMode />
        <CSSReset />
        <Stack>
          <Stack minHeight="100vh">
            <Navbar />
            <Stack align="center">{props.children}</Stack>
          </Stack>
          <Footer />
        </Stack>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
