import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageWindow from "./MessageWindow";

describe("Message Window component", () => {
  test("renders Send Message text when not fetching", () => {
    // Arrange
    render(<MessageWindow />);
    // Act
    
    // Assert
    const buttonText = screen.getByText(/send message/i);
    expect(buttonText).toBeInTheDocument();
  });

  test("renders ... when button is clicked", () => {
    render(<MessageWindow />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const buttonText = screen.getByText("...", { exact: true });
    expect(buttonText).toBeInTheDocument();
  })
});
