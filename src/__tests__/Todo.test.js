// 1. Import required libraries
// 2. Renderin components
// 3. write test cases
// 4. simulate user interactions
// 5. Making assertions




import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure this import exists
import Todo from "../Todo";

test("renders the todo components", () => {
  render(<Todo />);
  const linkElement = screen.getByText(/Add Todo/i);
  expect(linkElement).toBeInTheDocument();
});

test("add todo", () => {
  render(<Todo />);
  const input = screen.getByPlaceholderText(/new todo.../i);
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: "new todo" } });
  fireEvent.click(button);

  const newTodo = screen.getByText(/new todo/i);
  expect(newTodo).toBeInTheDocument();
});
