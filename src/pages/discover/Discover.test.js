import { render, screen } from "@testing-library/react";

import App from "../../app";
import Discover from ".";

describe("Discover Page", () => {
  test("Renders movies on page load", async () => {
    render(<Discover setIsOpen={() => true} />);
    const movieItems = await screen.findAllByRole("listitem");
    expect(movieItems).toHaveLength(20);
  });
});
