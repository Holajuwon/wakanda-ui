import axios from "axios";
const port = process.env.PORT || 9000;

export const fetchCourses = async () => {
  try {
    const res = await axios.get(
      `http://localhost:${port}/courses?_sort=id&_order=desc`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async () => {
  const id = await JSON.parse(localStorage.getItem("user"));

  try {
    const res = await axios.get(`http://localhost:${port}/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
