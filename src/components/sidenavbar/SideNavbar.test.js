import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideNavBar from "./index";
import App from "../../app";
import { BrowserRouter } from "react-router-dom";

describe("SideNavBar Component", () => {
  test("Renders Navbar With all links", () => {
    render(
      <BrowserRouter>
        <SideNavBar />
      </BrowserRouter>
    );

    const navLinks = screen.getAllByRole("link");
    expect(navLinks).toHaveLength(5);
  });

  test("Renders Discover if discover button is clicked", () => {
    render(<App />);
    const discoverLink = screen.getByText("Discover");
    userEvent.click(discoverLink);

    const searchBar = screen.getByPlaceholderText("Search for movies");
    expect(searchBar).toBeInTheDocument();
  });
});
