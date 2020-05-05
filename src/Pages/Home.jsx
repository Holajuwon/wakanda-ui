import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/core";
import { Login } from "../components/Auth";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout login={true}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundImage=""
        w="80vw"
      >
        <Heading mt={20} textAlign="center">
          Welcome To wakanda
        </Heading>
        <Text fontSize="xl">Learn New Skills With us.</Text>
        <Text fontSize="2xl">Aspire. Accomplish</Text>
        <Login text="Register With Google" color="green" />
      </Flex>
    </Layout>
  );
};

export default Home;
