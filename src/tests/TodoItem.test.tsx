
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { Todo } from "../types";

describe("TodoItem component", () => {
  const mockTodo: Todo = { id: 1, text: "Тестовая задача", completed: false };
  const toggleTodo = jest.fn();

  test("отображает текст задачи", () => {
    render(<TodoItem todo={mockTodo} toggleTodo={toggleTodo} />);
    expect(screen.getByText("Тестовая задача")).toBeInTheDocument();
  });

  test("отмечает задачу как завершенную", () => {
    render(<TodoItem todo={{ ...mockTodo, completed: true }} toggleTodo={toggleTodo} />);
    expect(screen.getByText("Тестовая задача")).toHaveClass("completed");
  });

  test("вызывает toggleTodo при клике на чекбокс", () => {
    render(<TodoItem todo={mockTodo} toggleTodo={toggleTodo} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(toggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
