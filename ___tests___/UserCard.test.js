import { render, screen } from "@testing-library/react";
import CardUsers from "../components/Cards/CardUsers";

test("renders learn react", () => {
  render(<CardUsers />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
