
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("добавляет новую задачу", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    
    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Новая задача")).toBeInTheDocument();
  });

  test("помечает задачу как завершенную", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    
    fireEvent.change(input, { target: { value: "Завершенная задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText("Завершенная задача")).toHaveClass("completed");
  });

  test("фильтрует только активные задачи", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    
    fireEvent.change(input, { target: { value: "Активная задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByText("Active"));
    expect(screen.queryByText("Активная задача")).not.toBeInTheDocument();
  });

  test("очищает завершенные задачи", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    
    fireEvent.change(input, { target: { value: "Завершенная задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByText("Clear completed"));
    expect(screen.queryByText("Завершенная задача")).not.toBeInTheDocument();
  });
});
