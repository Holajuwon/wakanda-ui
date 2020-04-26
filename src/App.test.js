import React from "react";
import { render } from "@testing-library/react";
import Home from "./Pages/Home";

test("renders Chrakra UI in App", () => {
  const { getByText } = render(<Home />);
  const element = getByText(/Wakanda/i);
  expect(element).toBeInTheDocument();
});
