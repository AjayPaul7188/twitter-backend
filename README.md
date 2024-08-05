# twitter-backend
# Twitter-like Backend System
# Assignment Overview
This project is a simplified Twitter-like backend system designed to showcase basic backend functionalities using Node.js and MongoDB. It includes user registration, authentication, tweeting, and fetching user timelines.

# Features
User Registration
User Login
Post a Tweet
Fetch User Timeline
JWT Authentication
Cursor-based Pagination (Optional)
Database Indexing (Optional)

# Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Tokens)
dotenv

# Getting Started
Prerequisites
Node.js (v12 or higher)
MongoDB (local or MongoDB Atlas)


# Running the Application
bash
Copy code
node app.js

# API Endpoints
User Registration:

URL: /api/users/register
Method: POST
Body: { "username": "string", "password": "string" }

User Login:

URL: /api/auth/login
Method: POST
Body: { "username": "string", "password": "string" }

Post a Tweet:

URL: /api/tweets
Method: POST
Headers: Authorization: Bearer <token>
Body: { "text": "string" }

Fetch User Timeline:

URL: /api/users/:userId/timeline
Method: GET
Headers: Authorization: Bearer <token>

# Testing the Application
You can test the endpoints using tools like curl or Postman.

Example curl Commands
Register a New User

bash
Copy code
curl -X POST http://localhost:3000/api/users/register -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}'
Log In the User

bash
Copy code
response=$(curl -s -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}')
token=$(echo $response | jq -r '.token')
echo "JWT Token: $token"
Post a Tweet

bash
Copy code
curl -X POST http://localhost:3000/api/tweets -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"text": "Hello, world!"}'
Fetch User Timeline

bash
Copy code
curl -X GET http://localhost:3000/api/users/<userId>/timeline -H "Authorization: Bearer $token"
Replace <userId> with the actual user ID you want to fetch the timeline for.

Issues and Troubleshooting
MongoDB Connection Error: Ensure your MongoDB URI is correct and the database server is accessible.
JWT Authentication Error: Ensure the token is correctly generated and included in the request headers.
Contact Information
For any queries or assistance, feel free to contact:

Ajay Paul
Email: ajaypaulmummidi@gmail.com
GitHub: AjayPaul7188
