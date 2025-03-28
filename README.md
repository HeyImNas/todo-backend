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
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Start the server
   - For development: `npm run dev`
   - For production: `npm start`

## Deployment

### Deploying to Railway

1. Create a Railway account at https://railway.app
2. Install the Railway CLI: `npm i -g @railway/cli`
3. Login to Railway: `railway login`
4. Initialize your project: `railway init`
5. Provision a MongoDB database:
   ```
   railway add plugin mongodb
   ```
6. Link your MongoDB service with your project:
   ```
   railway link
   ```
7. Set up environment variables:
   ```
   railway variables set MONGODB_URI=YOUR_MONGODB_URI
   ```
8. Deploy your application:
   ```
   railway up
   ```
9. Once deployed, get your production URL:
   ```
   railway domain
   ```

## Frontend Integration

This backend is designed to work with the corresponding Todo List frontend that's hosted on GitHub Pages. Update the frontend's `apiUrl` in `scripts/todo.js` to point to this backend's URL once deployed. 