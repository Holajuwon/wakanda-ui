import React from "react";
import { Stack, Text, Box } from "@chakra-ui/core";
import { FaHeart } from "react-icons/fa";
import wave from "../Assets/wave.svg";

const Footer = () => {
  return (
    <Stack align="centre" height="10px" marginY="2rem">
      <Text textAlign="center">
        Made with{" "}
        <Box as={FaHeart} color="gray.700" display="inline" size="1.2em" /> by
        Hola
      </Text>
      <Text textAlign="center">
        VGG Virtual Internship &copy; {new Date().getFullYear()}
      </Text>
    </Stack>
  );
};

export default Footer;
