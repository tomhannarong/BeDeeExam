import { Request, Response } from "express";
import { Todo } from "../types/todo";

const todos: Todo[] = [];

export const getAllTodos = (req: Request, res: Response) => {
  res.json({ data: todos });
};

export const getTodoById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);

  if (!isNaN(id) && todo) {
    res.json({ data: todo });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};

export const addTodo = (req: Request, res: Response) => {
  const { task } = req.body;
  if (typeof task === "string") {
    const newTodo: Todo = {
      id: todos.length + 1,
      task: task,
      createdAt: new Date(),
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Todo added successfully", data: newTodo });
  } else {
    res.status(400).json({ error: "Invalid todo format" });
  }
};

export const updateTodoById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const updatedTask = req.body.task;

  const todoIndex = todos.findIndex((t) => t.id === id);

  if (!isNaN(id) && todoIndex !== -1 && typeof updatedTask === "string") {
    todos[todoIndex].task = updatedTask;
    res.json({ message: "Todo updated successfully", data: todos[todoIndex] });
  } else {
    res.status(404).json({ error: "Todo not found or invalid data" });
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((todo) => todo.id === id);

  if (!isNaN(id) && index !== -1) {
    const deletedTodo = todos.splice(index, 1)[0];
    res.json({ message: "Todo deleted successfully", data: deletedTodo });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};
