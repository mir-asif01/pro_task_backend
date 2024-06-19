# Description
This is the server side code repository of ProTask app.

# Live backend server link
https://pro-task-backend.onrender.com/

# API endpoints
- /task {POST} create a new task
- /tasks {GET} fetch all the tasks a user has already created. The email address of the user is send via requests query params.
- /task/:id {GET} fetch a single task base on the unique id of the task.
- /task/:id {DELETE} delete a single task base on the unique id
- /task/:id {PATCH} update a single task
- /task/:id  {POST} update the status of task
- /add-reviw {POST} add n new review/feedback from user
- /reviews {GET} fetch all the reviews from database
