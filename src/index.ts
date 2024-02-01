import express from "express";
import * as todoController from "./controllers/todoController";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/todos", todoController.getAllTodos);
app.get("/todos/:id", todoController.getTodoById);
app.post("/todos", todoController.addTodo);
app.put("/todos/:id", todoController.updateTodoById);
app.delete("/todos/:id", todoController.deleteTodo);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
