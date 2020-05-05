import React from "react";
import { ProfileForm } from "./ProfileForm";
import {
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  Heading,
} from "@chakra-ui/core";
import UploadCourse from "./UploadCourse";

const Dashboard = () => {
  return (
    <Tabs>
      <Heading>Dashboard</Heading>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Favorites</Tab>
        <Tab hidden={false}>Upload Course</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ProfileForm />
        </TabPanel>
        <TabPanel>
          <ProfileForm />
        </TabPanel>
        <TabPanel>
          <UploadCourse />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Dashboard;
