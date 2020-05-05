import React, { useEffect, useState } from "react";
import {
  Grid,
  Input,
  Text,
  Box,
  InputLeftAddon,
  InputGroup,
  Textarea,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  Heading,
  Select,
} from "@chakra-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const ProfileForm = ({ data }) => {
  const history = useHistory();
  const [user, setUser] = useState(data);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:9000/users/${user.id}`, user)
      .then(async () => {
        toast({
          position: "top",
          title: "Update Successful",
          description: "Your info has been updated successfully",
          status: "success",
          duration: 3000,
        });
        history.replace("/dashboard", { ...user });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (data) setUser({ ...data });
  }, [data]);

  if (!data.role) {
    return (
      <Modal isOpen={!isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>Welcome</Heading>
          </ModalHeader>
          <ModalBody>
            <Text>
              You are welcome to wakanda,{" "}
              <span style={{ fontWeight: "bold" }}>{user.givenName}</span>
            </Text>
            <Text>Are you a teacher or a student?</Text>
            <Select
              placeholder="select role"
              onChange={handleChange}
              name="role"
            >
              <option value="Tutor">Tutor</option>
              <option value="Student">Student</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={async () => {
                data.role = user.role;
                await onOpen();
                await handleSubmit();
              }}
              isDisabled={!user.role}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Grid
      templateColumns={{
        md: "repeat(2, 1fr)",
      }}
      justifyContent="center"
      gap={6}
      mt="2"
    >
      <Box d="flex" flexDirection="column" maxW="80vw">
        <Text>First Name</Text>
        <Input
          borderColor="gray.400"
          value={user.givenName}
          name="givenName"
          onChange={handleChange}
        />
      </Box>
      <Box d="flex" flexDirection="column" maxW="80vw">
        <Text>Last Name</Text>
        <Input
          borderColor="gray.400"
          value={user.familyName}
          name="familyName"
          onChange={handleChange}
        />
      </Box>
      <Box d="flex" flexDirection="column" maxW="80vw">
        <Text>Email</Text>
        <Input
          borderColor="gray.400"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
      </Box>
      <Box d="flex" flexDirection="column" maxW="80vw">
        <Text>Bio</Text>
        <Textarea
          borderColor="gray.400"
          overflow="none"
          name="bio"
          value={user.bio}
          onChange={handleChange}
        />
      </Box>
      <Box d="flex" flexDirection="column" maxW="80vw">
        <Text>Twitter</Text>
        <InputGroup borderColor="gray.400">
          <InputLeftAddon>twitter.com/</InputLeftAddon>
          <Input
            roundedLeft="0"
            name="twitter"
            value={user.twitter}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>
      <Box d="flex" flexDirection="column" maxW="80vw">
        <Text>Linkedin</Text>
        <InputGroup borderColor="gray.400">
          <InputLeftAddon>linkedin.com/</InputLeftAddon>
          <Input
            roundedLeft="0"
            name="linkedin"
            value={user.linkedin}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>

      <Button
        maxW="80vw"
        gridColumn={{
          md: "2/2",
        }}
        onClick={handleSubmit}
        variantColor="teal"
      >
        Save
      </Button>
    </Grid>
  );
};
