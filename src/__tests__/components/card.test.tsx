import { render, screen } from "@testing-library/react";
import CustomCard from "../../components/card";
import React from "react";

describe("Custom Card Component", () => {
  const cardProps = {
    title: "FOOD",
    timestamp: "07/11/2024 08:51 PM",
    description:
      "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood.",
    imageUrl: "/path/to/profile-pic.jpg",
  };
  it("renders with provided props", () => {
    render(<CustomCard {...{ ...cardProps }} />);
    expect(screen.getByText("FOOD")).toBeInTheDocument();
  });
});
