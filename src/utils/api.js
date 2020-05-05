import axios from "axios";

export const fetchCourses = async () => {
  try {
    const res = await axios.get("/courses?_sort=id&_order=desc");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async () => {
  const id = await JSON.parse(localStorage.getItem("user"));

  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
