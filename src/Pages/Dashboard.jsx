import React, { useEffect, useState } from "react";
import { ProfileForm } from "../components/ProfileForm";
import {
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  Heading,
} from "@chakra-ui/core";
import UploadCourse from "../components/UploadCourse";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";
import { fetchUser } from "../utils/api";
import { useLocation } from "react-router-dom";

const Dashboard = ({ history }) => {
  const { state } = history.location;
  const [data, setData] = useState({});
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchUser()
      .then((data) => {
        if (data) setData(data);
      })
      .catch((err) => {
        setData({});
      });
  }, []);

  return (
    <Layout data={data}>
      <Tabs w="90%" justifyContent="center">
        <Heading>Dashboard</Heading>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Favorites</Tab>
          <Tab disabled={data.role === "Tutor" ? false : true}>
            Upload Course
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ProfileForm data={data} />
          </TabPanel>
          <TabPanel>{/* <CourseCard /> */}</TabPanel>
          <TabPanel>
            <UploadCourse />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
