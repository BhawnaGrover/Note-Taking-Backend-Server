# Note-Taking-Backend-Server

Below is a minimal API documentation for your note-taking backend server. This assumes that your server is deployed at [https://note-taking-backend-server.vercel.app/]. Replace :todoId with the actual ID of the todo you want to interact with.

## 1. Add a new todo
### - Endpoint: POST /api/task/add
### - Description: Add a new todo for a user.
### - Request:
- Headers:
- x-auth-token (Authentication token)
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
