import React from "react";
import { render } from "@testing-library/react";
import AllPosts from "./Pages/AllPosts";

test("renders Chrakra UI in App", () => {
  const { getByText } = render(<AllPosts />);
  const element = getByText(/Latest Post/i);
  expect(element).toBeInTheDocument();
});
