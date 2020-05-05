import React from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Stack,
  DarkMode,
} from "@chakra-ui/core";
import { customTheme } from "../theme";
import Footer from "./Footer";
import Navbar from "./NavBar";
import PropTypes from "prop-types";

const App = ({ children, login, mode, github, fdir, data }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <DarkMode />
        <CSSReset />
        <Stack>
          <Stack minHeight="100vh">
            <Navbar
              login={login}
              mode={mode}
              github={github}
              fdir={fdir}
              data={data}
            />
            <Stack align="center">{children}</Stack>
          </Stack>
          <Footer />
        </Stack>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
Navbar.defaultProps = {
  mode: true,
  login: false,
  github: true,
  fdir: "row",
};

Navbar.propTypes = {
  mode: PropTypes.bool,
  login: PropTypes.bool,
  github: PropTypes.bool,
  fdir: PropTypes.string,
};

export default App;
