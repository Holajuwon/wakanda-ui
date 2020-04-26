import React from "react";
import { render } from "@testing-library/react";
import Error from "./Pages/Error";

test("renders Chrakra UI in App", () => {
  const { getByText } = render(<Error />);
  const element = getByText(/404/i);
  expect(element).toBeInTheDocument();
});
