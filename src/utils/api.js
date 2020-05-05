import axios from "axios";

export const fetchCourses = async () => {
  try {
    const res = await axios.get(
      "http://localhost:9000/courses?_sort=id&_order=desc"
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async () => {
  const id = await JSON.parse(localStorage.getItem("user"));

  try {
    const res = await axios.get(`http://localhost:9000/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
