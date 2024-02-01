# To-Do List API

This is a simple To-Do List API built with Node.js and Express. It provides basic CRUD operations for managing tasks in a to-do list.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tomhannarong/BeDeeExam.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Use tools like Postman or cURL to interact with the API. Below are the available endpoints:

   ```bash
    GET /todos: Retrieve all todos.
    GET /todos/:id: Retrieve a todo by ID.
    POST /todos: Add a new todo.
    PUT /todos/:id: Update a todo by ID.
    DELETE /todos/:id: Delete a todo by ID.
   ```

### API Responses

1. All successful responses will have the following structure:

   ```bash
   {
    "message": "Operation successful",
    "data": // Response data
    }
   ```

1. Error responses will look like:

   ```bash
   {
    "error": "Error message"
    }
   ```

### Todo Object Structure

A todo object has the following structure:

```bash
  {
    "id": 1,
    "task": "Example Todo",
    "createdAt": "2024-02-02T12:00:00.000Z"
   }
```
