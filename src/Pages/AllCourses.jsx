import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";
import { Grid } from "@chakra-ui/core";
import { fetchCourses } from "../utils/api";
import { Link } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses()
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout fdir="row-reverse" github={false}>
      <Grid
        templateColumns={{
          xl: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        {courses.map((course, ind) => {
          return (
            <Link
              to={{
                pathname: `/watch/${course.courseTitle}`,
                hash: `#${course.courseTitle}`,
                state: course,
              }}
              key={course.id}
            >
              <CourseCard course={course} />
            </Link>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default Course;
