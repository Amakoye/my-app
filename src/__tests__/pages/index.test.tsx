import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import React from "react";
import Home from "../../pages/index";
import ExampleComponent from "../../components/example";

describe("Home Page", () => {
  it("renders home page", () => {
    render(<Home />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });
  it("renders Example component", () => {
    render(<ExampleComponent />);
  });
});
