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
          Heading title ydsdusdb s jsdvvsjgh dsuvb dvuialsdcaildvdh
        </Heading>
        <Text>Text value</Text>
        <Text>Text value</Text>
        <Login text="Register With Google" color="green" />
      </Flex>
    </Layout>
  );
};

export default Home;
