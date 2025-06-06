import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Contact from "./Components/Contact";

test("renders text on modal", () => {
  render(<Contact/>);
  expect(screen.getByText(/Connect With Me/i)).toBeInTheDocument();
});
