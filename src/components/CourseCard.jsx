import React from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/core";
import { MdStar } from "react-icons/md";

const CourseCard = ({ course }) => {
  return (
    <Box
      w={{
        xl: "250px",
        lg: "200px",
        md: "200px",
        sm: "200px",
        "450px": "200px",
      }}
      p={3}
      borderRadius={9}
      borderWidth={2}
      borderStyle="solid"
      borderColor="grey.100"
      m="auto"
      my={4}
    >
      <Image
        rounded="md"
        src={`https://dummyimage.com/250x200/d6cb33/020414.jpg&text=${course.courseTitle}`}
        alt="course cover image"
      />
      <Flex align="baseline" mt={2}>
        {course.dateUploaded && <Badge variantColor="brand">New Course</Badge>}
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="brand.800"
        >
          Python &bull;
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {course.courseTitle}
      </Text>
      <Text mt={2}>20min</Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontsize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  );
};

export default CourseCard;
