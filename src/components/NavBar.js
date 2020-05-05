import React, { useState, useEffect } from "react";
import {
  Box,
  PseudoBox,
  useColorMode,
  IconButton,
  Badge,
  Text,
  Flex,
  Link,
  Avatar,
} from "@chakra-ui/core";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { Link as RouterLink, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Login } from "../components/Auth";
import { fetchUser } from "../utils/api";

const Navbar = ({ mode, login, github, fdir }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser()
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((err) => {
        setUser({});
      });
  }, []);
  return (
    <PseudoBox
      borderBottom="1px solid blue.500"
      borderColor="blue.300"
      shadow="md"
      paddingTop="30px"
      paddingBottom="30px"
      paddingLeft={{ md: "50px", sm: "40px", xs: "20px" }}
      paddingRight={{ md: "50px", sm: "40px", xs: "20px" }}
    >
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDir={fdir}
      >
        <Flex>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Holajuwon/wakanda-ui"
          >
            <Box size={28} as={FaGithub} hidden={!github} />
          </Link>
          <Avatar
            name={`${user.givenName} ${user.familyName}`}
            // src={`${user.imageUrl}`}
            hidden={github}
          />
        </Flex>
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          <RouterLink to="/course">
            <Text
              fontSize={{ xl: "3xl", bg: "3xl", md: "3xl", sm: "3xl" }}
              fontWeight="bold"
              textDecor="none"
            >
              Wakanda
            </Text>
          </RouterLink>
          <Badge variant="subtle" variantColor="pink" ml={1}>
            BETA
          </Badge>
        </Flex>
        <Flex>
          <Login hidden={!login} />
          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            variantColor="teal"
            aria-label="Call Sage"
            fontSize="20px"
            icon={colorMode === "light" ? FaMoon : FaSun}
            hidden={!mode}
          />
        </Flex>
      </Box>
    </PseudoBox>
  );
};

Navbar.defaultProps = {
  fdir: "column",
  mode: true,
  login: false,
  github: true,
};

Navbar.propTypes = {
  mode: PropTypes.bool,
  login: PropTypes.bool,
  github: PropTypes.bool,
  dir: PropTypes.string,
};

export default Navbar;
