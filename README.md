# Note-Taking-Backend-Server

Below is a minimal API documentation for your note-taking backend server. The server is deployed at [https://note-taking-backend-server.vercel.app/]. Replace :todoId with the actual ID of the todo you want to interact with.

# User Signup
- Endpoint: POST /api/auth/signup
- Description: Register a new user.
- Request:
  - Body:
json
```
{
  "username": "newUser",
  "email": "newuser@example.com",
  "password": "securePassword"
}
```
  - Response:
json
```
{
  "message": "User registered successfully",
  "body": {
    "_id": "userId",
    "username": "newUser",
    "email": "newuser@example.com",
    "todos": [],
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "__v": 0
  }
}
```
# User Signin
- Endpoint: POST /api/auth/signin
- Description: Authenticate an existing user.
- Request:
  - Body:
json
```
{
  "username": "existingUser",
  "password": "securePassword"
}
```
  - Response:
json
```
{
  "message": "User signin successfully",
  "user": {
    "_id": "userId",
    "username": "existingUser",
    "email": "existinguser@example.com",
    "todos": [],
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "__v": 0,
    "token": "jwtToken"
  }
}
```
Note: For the /signup and /signin endpoints, the token (jwtToken) returned in the response should be included in the x-auth-token header for subsequent requests that require authentication.



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
