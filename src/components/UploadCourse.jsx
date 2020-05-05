import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Flex,
  PseudoBox,
  useToast,
  CircularProgress,
  CircularProgressLabel,
  useDisclosure,
} from "@chakra-ui/core";
import { MdCloudUpload } from "react-icons/md";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const UploadCourse = ({}) => {
  const toast = useToast();
  const history = useHistory();
  const [video, setVideo] = useState({});
  const [input, setInput] = useState();
  const [upload, setUpload] = useState(0);
  const { isOpen, onOpen } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  async function handleFile(e) {
    setVideo(e.target.files[0]);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", video);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    console.log("toeched");
    Axios.post(process.env.REACT_APP_CLOUDINARY_BASE_URL, formData, {
      onUploadProgress: (progressEvent) => {
        let percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total - 1
        );
        setUpload(percent);
      },
    })
      .then(async (data) => {
        if (data.data.secure_url !== "") {
          const uploadedFileUrl = data.data.secure_url;
          console.log(uploadedFileUrl);
          await Axios.post("http://localhost:9000/courses", {
            ...input,
            courseUrl: uploadedFileUrl,
            tutorId: history.location.state.googleId,
            dateUploaded: new Date(),
          });
          await toast({
            position: "top",
            title: "Upload Successful",
            description: "Your video was uploaded successfully",
            status: "success",
            duration: 3000,
          });
        }
        await setUpload(100);
        setTimeout(() => {
          history.push("/course");
        }, 2000);
      })
      .catch((err) => {
        setUpload(0);
        toast({
          position: "top",
          title: "Error",
          description: "A problem occured while uploading file, try again",
          status: "error",
          duration: 3000,
        });
      });
  };

  return (
    <Flex
      flexDirection="column"
      minH="100vh"
      w={{ "2xl": "70vw", xl: "70vw", bg: "80vw", sm: "80vw" }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Box d="flex" flexDirection="column" w="100%">
        <Text>Course Title</Text>
        <Input
          name="courseTitle"
          borderColor="gray.400"
          onChange={handleChange}
        />
      </Box>
      <Box d="flex" flexDirection="column" w="100%">
        <Text>Instructor</Text>
        <Input
          name="instructor"
          borderColor="gray.400"
          onChange={handleChange}
        />
      </Box>
      <Flex
        w="70vw"
        flexDir="column"
        justifyContent="center"
        border="1px dashed grey"
        alignItems="center"
        rounded="9px"
        p={1}
      >
        <label textAlign="center">
          Drag or drop video here or click to upload your video
        </label>
        <PseudoBox
          width={{
            xl: "",
            bg: "",
            md: "200px",
            sm: "200px",
            "400px": "150px",
          }}
          height="200px"
          display="flex"
          align-items="center"
          justify-content="center"
          borderRadius="1em"
          position="relative"
          overflow="hidden"
          backgroundSize="100% 200%"
          transition="all ls"
          fontSize="xl"
        >
          <Input
            // borderRadius="100px"
            type="file"
            height="200px"
            width="200px"
            position="absolute"
            top="0"
            left="0"
            opacity="0"
            cursor="pointer"
            borderWidth="2px"
            onChange={handleFile}
            // accept="video/*"
          />
          <Box as={MdCloudUpload} size="10em" color="currentColor" />
        </PseudoBox>
        <Text textAlign="center">{video.name}</Text>
      </Flex>
      <Flex w="50vw" justifyContent="space-around" alignContent="center">
        <Button
          leftIcon="arrow-up"
          variantColor="teal"
          disabled={!video.name}
          onClick={() => {
            handleUpload();
            onOpen();
          }}
        >
          Upload
        </Button>
        {isOpen && (
          <CircularProgress value={upload} color="green">
            <CircularProgressLabel>{upload}%</CircularProgressLabel>
          </CircularProgress>
        )}
      </Flex>
    </Flex>
  );
};

export default UploadCourse;
