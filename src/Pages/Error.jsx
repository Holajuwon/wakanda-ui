import React from "react";
import { Flex, Text, Heading, Divider } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Heading as="h4">404</Heading>
      <Divider
        mx="12px"
        borderColor="#000"
        orientation="vertical"
        h="10rem"
        borderWidth="2px"
      />
      <Flex flexDir="column" alignContent="center" alignItems="center">
        <Text>Page not found</Text>
        <Link to="/" style={{ textDecoration: "none" }}>
          Go Home
        </Link>
      </Flex>
    </Flex>
  );
};

export default Error;
