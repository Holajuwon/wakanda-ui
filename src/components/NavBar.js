import React from "react";
import {
  Box,
  PseudoBox,
  useColorMode,
  IconButton,
  Badge,
  Text,
  Flex,
  Link,
} from "@chakra-ui/core";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        flexDir={{ md: "row", sm: "row", xs: "row" }}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Holajuwon/wakanda-ui"
        >
          <Box size={28} as={FaGithub} />
        </Link>
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <RouterLink to="/">
            <Text fontSize="3xl" fontWeight="bold" textDecor="none">
              Wakanda
            </Text>
          </RouterLink>
          <Badge variant="subtle" variantColor="pink" ml={1}>
            BETA
          </Badge>
        </Flex>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          variantColor="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={colorMode === "light" ? FaMoon : FaSun}
        />
      </Box>
    </PseudoBox>
  );
};

export default Navbar;
