import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

test("renders hello message", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByText("I Came. I Saw. I Captured.")).toBeInTheDocument();
});
