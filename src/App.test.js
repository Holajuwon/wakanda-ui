import React from "react";
import { render } from "@testing-library/react";
import Footer from "./components/Footer";

test("renders Chrakra UI in App", () => {
  const { getByText } = render(<Footer />);
  const element = getByText(/Hola/i);
  expect(element).toBeInTheDocument();
});
