import React from "react";
import Layout from "../components/Layout";
import CourseView from "../components/CourseView";

const Course = () => {
  return (
    <Layout fdir="row-reverse" github={false}>
      <CourseView />
    </Layout>
  );
};

export default Course;
