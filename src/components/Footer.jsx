import React from "react";
import { Stack, Text, Box } from "@chakra-ui/core";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack align="centre" height="10px" marginY="2rem">
      <Text textAlign="center">
        Made with{" "}
        <Box as={FaHeart} color="tomato" display="inline" size="1.3em" /> by
        Hola &copy; {new Date().getFullYear()}
      </Text>
    </Stack>
  );
};

export default Footer;
