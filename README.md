# Todo List Backend

A RESTful API backend for a Todo List application built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete todo items
- MongoDB database integration
- CORS enabled for frontend integration
- RESTful API endpoints

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Requirements

- Node.js
- MongoDB database (local or MongoDB Atlas)

## Setup Instructions

1. Clone the repository
   ```
   git clone https://github.com/your-username/todo-backend.git
   cd todo-backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory based on `.env.example`
   ```
   PORT=5000
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Start the server
   - For development: `npm run dev`
   - For production: `npm start`

## Deployment

This application is designed to be deployed on Render.com.

## Frontend Integration

This backend is designed to work with the corresponding Todo List frontend that's hosted on GitHub Pages. Update the frontend's `apiUrl` in `scripts/todo.js` to point to this backend's URL once deployed. 