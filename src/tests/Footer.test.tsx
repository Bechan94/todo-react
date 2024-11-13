
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  const setFilter = jest.fn();
  const clearCompleted = jest.fn();

  test("отображает количество активных задач", () => {
    render(<Footer count={5} filter="all" setFilter={setFilter} clearCompleted={clearCompleted} />);
    expect(screen.getByText("5 items left")).toBeInTheDocument();
  });

  test("вызывает setFilter при выборе фильтра", () => {
    render(<Footer count={5} filter="all" setFilter={setFilter} clearCompleted={clearCompleted} />);

    fireEvent.click(screen.getByText("Active"));
    expect(setFilter).toHaveBeenCalledWith("active");

    fireEvent.click(screen.getByText("Completed"));
    expect(setFilter).toHaveBeenCalledWith("completed");
  });

  test("вызывает clearCompleted при нажатии на Clear completed", () => {
    render(<Footer count={5} filter="all" setFilter={setFilter} clearCompleted={clearCompleted} />);
    fireEvent.click(screen.getByText("Clear completed"));
    expect(clearCompleted).toHaveBeenCalled();
  });
});
