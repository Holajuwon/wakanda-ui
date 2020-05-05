import React, { useState, useEffect } from "react";
import {
  AspectRatioBox,
  Box,
  Button,
  Stack,
  Flex,
  Grid,
} from "@chakra-ui/core";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";
import { useLocation } from "react-router-dom";

const CourseView = () => {
  const location = useLocation();
  const [course, setCourse] = useState({});

  useEffect(() => {
    setCourse(location.state);
  }, [location]);

  return (
    <>
      <Grid
        w="100%"
        templateColumns={{
          md: "70% 20%",
          sm: "90%",
          "500px": "95%",
        }}
        gap={5}
        mt="2"
        justifyContent="center"
      >
        <Flex w="100%" height="70vH" justifyContent="center">
          <Player
            poster={`https://dummyimage.com/250x200/d6cb33/020414.jpg&text=${course.courseTitle}`}
            height="50vh"
            width="98%"
            fluid={false}
          >
            <source src={course.courseUrl} />
            <BigPlayButton position="center" />
            <ControlBar>
              <PlaybackRateMenuButton
                rates={[5, 2, 1.5, 1, 0.8, 0.5]}
                order={1}
              />
              <ReplayControl seconds={10} order={1} />
              <CurrentTimeDisplay order={1.3} />
              <TimeDivider order={1.4} />
              <ForwardControl seconds={30} order={7.1} />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>
        </Flex>
      </Grid>
    </>
  );
};

export default CourseView;
