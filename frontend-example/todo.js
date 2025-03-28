// This is a sample JavaScript file for the frontend
// Replace YOUR_RAILWAY_URL with the actual URL after deploying to Railway

const apiUrl = 'https://YOUR_RAILWAY_URL/api/todos';

document.addEventListener('DOMContentLoaded', fetchTodos);

// Fetch all todos from the API
async function fetchTodos() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch todos');
    
    const todos = await response.json();
    displayTodos(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    displayError('Failed to load tasks. Please try again later.');
  }
}

// Add a new todo
async function addTodo(text) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
    
    if (!response.ok) throw new Error('Failed to add todo');
    
    const newTodo = await response.json();
    addTodoToDOM(newTodo);
    return newTodo;
  } catch (error) {
    console.error('Error adding todo:', error);
    displayError('Failed to add task. Please try again.');
    return null;
  }
}

// Update a todo (mark as completed or update text)
async function updateTodo(id, updates) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    });
    
    if (!response.ok) throw new Error('Failed to update todo');
    
    const updatedTodo = await response.json();
    updateTodoInDOM(updatedTodo);
    return updatedTodo;
  } catch (error) {
    console.error('Error updating todo:', error);
    displayError('Failed to update task. Please try again.');
    return null;
  }
}

// Delete a todo
async function deleteTodo(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) throw new Error('Failed to delete todo');
    
    removeTodoFromDOM(id);
    return true;
  } catch (error) {
    console.error('Error deleting todo:', error);
    displayError('Failed to delete task. Please try again.');
    return false;
  }
}

// Display functions for the DOM (these would be customized based on your HTML structure)
function displayTodos(todos) {
  // Implementation depends on your HTML structure
  console.log('Todos loaded:', todos);
}

function addTodoToDOM(todo) {
  // Implementation depends on your HTML structure
  console.log('Todo added:', todo);
}

function updateTodoInDOM(todo) {
  // Implementation depends on your HTML structure
  console.log('Todo updated:', todo);
}

function removeTodoFromDOM(id) {
  // Implementation depends on your HTML structure
  console.log('Todo removed:', id);
}

function displayError(message) {
  // Implementation depends on your HTML structure
  console.error(message);
} 