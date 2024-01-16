# Note-Taking-Backend-Server

Below is a minimal API documentation for your note-taking backend server. This assumes that your server is deployed at [https://note-taking-backend-server.vercel.app/]. Replace :todoId with the actual ID of the todo you want to interact with.

## 1. Add a new todo
### - Endpoint: POST /api/task/add
### - Description: Add a new todo for a user.
### - Request:
- Headers:
> x-auth-token (Authentication token)
- Body:
```
{
  "title": "My Task",
  "task": "Complete the task"
}
```
- Response:
```
{
  "message": "Todo added successfully",
  "user": {
    // User details including the newly added todo
  }
}
```
## 2. Get all todos for a user
### - Endpoint: GET /api/task/all
### - Description: Get all todos for the authenticated user.
### - Request:
- Headers:
> x-auth-token (Authentication token)
- Response:
json
```
{
  "todos": [
    // Array of todos for the user
    {
      "_id": "todoId",
      "title": "My Task",
      "task": "Complete the task",
      "completed": false
    },
    // Additional todos...
  ]
}
```
## 3. Update a specific todo
### - Endpoint: PUT /api/task/:todoId
### - Description: Update a specific todo for the authenticated user.
### - Request:
- Headers:
> x-auth-token (Authentication token)
- Body (Optional):
json
```
{
  "title": "Updated Title",
  "task": "Updated Task",
  "completed": true
}
```
- Response:
json
```
{
  "message": "Todo updated successfully",
  "user": {
    // User details including the updated todo
  }
}
```
## 4. Delete a specific todo
### - Endpoint: DELETE /api/task/:todoId
### - Description: Delete a specific todo for the authenticated user.
### - Request:
- Headers:
> x-auth-token (Authentication token)
- Response:
json
```
{
  "message": "Todo deleted successfully",
  "user": {
    // User details after deleting the todo
  }
}
```
Note: Ensure that you include the x-auth-token header in requests where authentication is required.
