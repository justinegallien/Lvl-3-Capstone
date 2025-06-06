import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Home from "./Home";

test("renders hello message", () => {
  render(<Home />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
